"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let UserType = class UserType {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserType.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserType.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserType.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], UserType.prototype, "birthdate", void 0);
UserType = __decorate([
    type_graphql_1.ObjectType()
], UserType);
exports.UserType = UserType;
//# sourceMappingURL=create-user.dto.js.map