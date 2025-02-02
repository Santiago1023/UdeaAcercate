"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyProfileArgs_1 = require("./args/CreateManyProfileArgs");
const Profile_1 = require("../../../models/Profile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProfileResolver = exports.CreateManyProfileResolver = class CreateManyProfileResolver {
    async createManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProfileArgs_1.CreateManyProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProfileResolver.prototype, "createManyProfile", null);
exports.CreateManyProfileResolver = CreateManyProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], CreateManyProfileResolver);
