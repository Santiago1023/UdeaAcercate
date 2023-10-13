"use strict";
var NestedEnumTagFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTagFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../enums/Tag");
let NestedEnumTagFilter = exports.NestedEnumTagFilter = NestedEnumTagFilter_1 = class NestedEnumTagFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTagFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTagFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tag_1.Tag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTagFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTagFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTagFilter)
], NestedEnumTagFilter.prototype, "not", void 0);
exports.NestedEnumTagFilter = NestedEnumTagFilter = NestedEnumTagFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTagFilter", {})
], NestedEnumTagFilter);
