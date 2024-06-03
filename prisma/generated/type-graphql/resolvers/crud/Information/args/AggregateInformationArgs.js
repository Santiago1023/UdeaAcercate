"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InformationOrderByWithRelationInput_1 = require("../../../inputs/InformationOrderByWithRelationInput");
const InformationWhereInput_1 = require("../../../inputs/InformationWhereInput");
const InformationWhereUniqueInput_1 = require("../../../inputs/InformationWhereUniqueInput");
let AggregateInformationArgs = class AggregateInformationArgs {
};
exports.AggregateInformationArgs = AggregateInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereInput_1.InformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereInput_1.InformationWhereInput)
], AggregateInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InformationOrderByWithRelationInput_1.InformationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationWhereUniqueInput_1.InformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationWhereUniqueInput_1.InformationWhereUniqueInput)
], AggregateInformationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInformationArgs.prototype, "skip", void 0);
exports.AggregateInformationArgs = AggregateInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateInformationArgs);
