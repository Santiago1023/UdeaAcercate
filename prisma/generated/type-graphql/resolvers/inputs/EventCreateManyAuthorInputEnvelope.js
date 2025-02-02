"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateManyAuthorInput_1 = require("../inputs/EventCreateManyAuthorInput");
let EventCreateManyAuthorInputEnvelope = exports.EventCreateManyAuthorInputEnvelope = class EventCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventCreateManyAuthorInput_1.EventCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EventCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EventCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.EventCreateManyAuthorInputEnvelope = EventCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("EventCreateManyAuthorInputEnvelope", {})
], EventCreateManyAuthorInputEnvelope);
