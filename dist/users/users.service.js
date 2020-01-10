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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        if (this.isValidEmail(createUserDto.email) && createUserDto.password) {
            const usedEmail = await this.findByEmail(createUserDto.email);
            if (!usedEmail) {
                createUserDto.password = await bcrypt.hash(createUserDto.password, saltRounds);
                const createdUser = new this.userModel(createUserDto);
                return await createdUser.save();
            }
            else {
                throw new common_1.HttpException('REGISTRATION.USER_ALREADY_REGISTERED', common_1.HttpStatus.FORBIDDEN);
            }
        }
        else {
            throw new common_1.HttpException('REGISTRATION.MISSING_MANDATORY_PARAMETERS', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async findOne(id) {
        return await this.userModel.findOne({ _id: id }).populate('Items').exec();
    }
    async delete(id) {
        return await this.userModel.findByIdAndRemove(id);
    }
    async update(id, user) {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
    async findByEmail(email) {
        return await this.userModel.findOne({ email }).exec();
    }
    isValidEmail(email) {
        if (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        else {
            return false;
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map