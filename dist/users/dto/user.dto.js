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
const item_dto_1 = require("./../../items/dto/item.dto");
const type_graphql_1 = require("type-graphql");
let UserDto = class UserDto {
    constructor(object) {
        this.id = object.id;
        this.firstName = object.firstName;
        this.lastName = object.lastName;
        this.email = object.email;
        this.birthdate = object.birthdate;
        this.items = object.items;
    }
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    type_graphql_1.Field(() => [item_dto_1.ItemDto]),
    __metadata("design:type", Array)
], UserDto.prototype, "items", void 0);
UserDto = __decorate([
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], UserDto);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map