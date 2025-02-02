"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEventResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyEventArgs_1 = require("./args/DeleteManyEventArgs");
const Event_1 = require("../../../models/Event");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyEventResolver = exports.DeleteManyEventResolver = class DeleteManyEventResolver {
    async deleteManyEvent(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).event.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEventArgs_1.DeleteManyEventArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyEventResolver.prototype, "deleteManyEvent", null);
exports.DeleteManyEventResolver = DeleteManyEventResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Event_1.Event)
], DeleteManyEventResolver);
