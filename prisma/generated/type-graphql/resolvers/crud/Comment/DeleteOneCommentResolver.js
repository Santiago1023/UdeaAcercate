"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCommentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCommentArgs_1 = require("./args/DeleteOneCommentArgs");
const Comment_1 = require("../../../models/Comment");
const helpers_1 = require("../../../helpers");
let DeleteOneCommentResolver = exports.DeleteOneCommentResolver = class DeleteOneCommentResolver {
    async deleteOneComment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCommentArgs_1.DeleteOneCommentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCommentResolver.prototype, "deleteOneComment", null);
exports.DeleteOneCommentResolver = DeleteOneCommentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], DeleteOneCommentResolver);
