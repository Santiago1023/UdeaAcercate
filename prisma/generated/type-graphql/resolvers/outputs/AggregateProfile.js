"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProfile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
let AggregateProfile = exports.AggregateProfile = class AggregateProfile {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountAggregate_1.ProfileCountAggregate)
], AggregateProfile.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinAggregate_1.ProfileMinAggregate)
], AggregateProfile.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxAggregate_1.ProfileMaxAggregate)
], AggregateProfile.prototype, "_max", void 0);
exports.AggregateProfile = AggregateProfile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProfile", {})
], AggregateProfile);
