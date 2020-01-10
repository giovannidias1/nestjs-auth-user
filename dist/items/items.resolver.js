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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const items_service_1 = require("./items.service");
const create_item_dto_1 = require("./dto/create-item.dto");
const input_items_input_1 = require("./input-items.input");
let ItemsResolver = class ItemsResolver {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    async items() {
        return this.itemsService.findAll();
    }
    async createItem(input) {
        return this.itemsService.create(input);
    }
    async updateItem(id, input) {
        return this.itemsService.update(id, input);
    }
    async deleteItem(id) {
        return this.itemsService.delete(id);
    }
};
__decorate([
    graphql_1.Query(() => [create_item_dto_1.ItemType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "items", null);
__decorate([
    graphql_1.Mutation(() => create_item_dto_1.ItemType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_items_input_1.ItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createItem", null);
__decorate([
    graphql_1.Mutation(() => create_item_dto_1.ItemType),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, input_items_input_1.ItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "updateItem", null);
__decorate([
    graphql_1.Mutation(() => create_item_dto_1.ItemType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "deleteItem", null);
ItemsResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;
//# sourceMappingURL=items.resolver.js.map