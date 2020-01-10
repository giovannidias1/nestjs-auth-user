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
const user_dto_1 = require("./../users/dto/user.dto");
const jwt_service_1 = require("./jwt.service");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async validateLogin(email, password) {
        const userFromDb = await this.userModel.findOne({ email });
        if (!userFromDb) {
            throw new common_1.HttpException('LOGIN.USER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        }
        const isValidPass = await bcrypt.compare(password, userFromDb.password);
        if (isValidPass) {
            const accessToken = await this.jwtService.createToken(email, userFromDb.roles);
            return { token: accessToken.access_token, user: new user_dto_1.UserDto(userFromDb) };
        }
        else {
            throw new common_1.HttpException('LOGIN.ERROR', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, jwt_service_1.JWTService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map