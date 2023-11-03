import { Resolver, Context } from "@/types";
import { ApolloError } from "@apollo/client";
import { argumentsObjectFromField, cloneDeep } from "@apollo/client/utilities";
import { Prisma, PrismaPromise } from "@prisma/client";
import { GraphQLError } from "graphql";

const resolveUser = async (userId: string, context: Context) => {
    const { db } = context;
    const user = db.user.findUnique({
        where: {
            id: userId
        }
    })
    return user;
}

const resolveEvent = async (eventId: string, context: Context) => {
    const { db } = context;
    const event = db.event.findUnique({
        where: {
            id: eventId
        }
    })
    return event;
}

const findHashtags = (text: String) => {
    const regex: RegExp = /#(\w+)/g;
    const hashtags = text.match(regex);
    return hashtags;
}

const resolvers: Resolver = {
    Event: {
        comments: async (parent, args, context) => {
            const { db } = context;
            const comments = await db.comment.findMany({
                where: {
                    eventId: parent.id
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
            return comments;
        },
        author: async (parent, args, context) => {
            return resolveUser(parent.authorId, context);
        },
        attendeesCount: async (parent, args, context) => {
            const { db } = context;
            const count = db.attendee.count({
                where: {
                    eventId: parent.id
                }
            })
            return count;
        },
        attendees: async (parent, args, context) => {
            const { db } = context;
            return await db.attendee.findMany({
                where: {
                    eventId: parent.id
                },
            }).catch((e) => {
                console.log(e)
                return null
            });
        }
    },
    Comment: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
    Profile: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
    },
    Attendee: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
    Query: {
        users: async (parent, args, context) => {
            const { db } = context;
            const users = await db.user.findMany();
            return users;
        },
        user: async (parent, args, context) => {
            const { db } = context;
            const user = await db.user.findUnique({
                where: {
                    email: args.email
                }
            });
            return user;
        },
        events: async (parent, args, context) => {
            const { db } = context;
            if (args == undefined)
                return await db.event.findMany();

            const filter = args.hashtags
            const options = {
                where: {
                    tag: args.tag,
                    hashtags: filter
                }
            }
            if (args.tag === undefined) {
                delete options["where"]["tag"]
            }
            if (filter === undefined) {
                delete options["where"]["hashtags"]
            } else {
                options["where"]["hashtags"] = {
                    hasEvery: filter,
                }
            }
            const findEvents = async () => {
                return await db.event.findMany(options)
                    .catch((e) => {
                        console.log(e)
                        return null
                    });;
            }
            const events = findEvents();
            return events;
        },
        profile: async (parent, args, context) => {
            const { db } = context;
            return await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            })
        },
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            const { db } = context;
            const { name, email, image, emailVerified } = args;

            const newUser = await db.user.create({
                data: {
                    email,
                    name,
                    image,
                    emailVerified
                },
            });

            return newUser;
        },
        createEvent: async (parent, args, context) => {
            const { db } = context;
            const { title, description, place, date, image, tag, authorId } = args;
            const hashtags: string[] = findHashtags(description) as string[];
            const newDate = new Date(date);
            console.log(newDate.toString())
            const newEvent = await db.event.create({
                data: {
                    title: title,
                    description: description,
                    place: place,
                    date: newDate,
                    image: image,
                    tag: tag,
                    hashtags: hashtags,
                    author: {
                        connect: {
                            id: authorId
                        }
                    }
                },
            });
            console.log("Nuevo evento: ", newEvent)
            return newEvent;
        },
        createProfile: async (parent, args, context) => {
            const { db } = context;
            const findProfile = await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            });
            if (findProfile != null) return findProfile;
            const newProfile = await db.profile.create({
                data: {
                    userId: args.userId
                }
            }).catch((error) => { return null });
            return newProfile;
        },
        updateProfile: async (parent, args, context) => {
            const { db } = context;
            const newData = cloneDeep(args);
            delete newData.userId;
            return await db.profile.update({
                where: {
                    userId: args.userId
                },
                data: newData,
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        createComment: async (parent, args, context) => {
            const { db } = context;
            return await db.comment.create({
                data: {
                    userId: args.userId,
                    eventId: args.eventId,
                    text: args.text,
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        deleteComment: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = true;
            await db.comment.delete({
                where: {
                    id: args.id,
                }
            }).catch((e) => {
                console.log(e)
                deleted = false;
            });
            return deleted;
        },
        addAttendee: async (parent, args, context) => {
            const { db } = context;
            return await db.attendee.create({
                data: {
                    userId: args.userId,
                    eventId: args.eventId
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        quitAttendee: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = true;
            const userId = args.userId
            const eventId = args.eventId
            await db.attendee.delete({
                where: {
                    userId_eventId: { userId, eventId }
                }
            }).catch((e) => {
                console.log(e)
                deleted = false;
            });
            return deleted;
        },
    }
};

export { resolvers }