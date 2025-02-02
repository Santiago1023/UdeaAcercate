import { AttendeeListRelationFilter } from "../inputs/AttendeeListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class EventWhereInput {
    AND?: EventWhereInput[] | undefined;
    OR?: EventWhereInput[] | undefined;
    NOT?: EventWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    place?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    tag?: EnumTagFilter | undefined;
    authorId?: StringFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    author?: UserRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    attendees?: AttendeeListRelationFilter | undefined;
}
