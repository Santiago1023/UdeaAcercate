"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEventArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventOrderByWithRelationInput_1 = require("../../../inputs/EventOrderByWithRelationInput");
const EventWhereInput_1 = require("../../../inputs/EventWhereInput");
const EventWhereUniqueInput_1 = require("../../../inputs/EventWhereUniqueInput");
const EventScalarFieldEnum_1 = require("../../../../enums/EventScalarFieldEnum");
let FindManyEventArgs = exports.FindManyEventArgs = class FindManyEventArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereInput_1.EventWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereInput_1.EventWhereInput)
], FindManyEventArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventOrderByWithRelationInput_1.EventOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEventArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventWhereUniqueInput_1.EventWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventWhereUniqueInput_1.EventWhereUniqueInput)
], FindManyEventArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEventArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyEventArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventScalarFieldEnum_1.EventScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyEventArgs.prototype, "distinct", void 0);
exports.FindManyEventArgs = FindManyEventArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyEventArgs);
