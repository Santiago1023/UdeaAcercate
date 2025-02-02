import { CommentOrderByWithRelationInput } from "../../../inputs/CommentOrderByWithRelationInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";
export declare class FindFirstCommentArgs {
    where?: CommentWhereInput | undefined;
    orderBy?: CommentOrderByWithRelationInput[] | undefined;
    cursor?: CommentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "text" | "dateTime" | "userId" | "eventId"> | undefined;
}
