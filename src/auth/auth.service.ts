import { UserDto } from './../users/dto/user.dto';
import { UserType } from './../users/dto/create-user.dto';
import { JWTService } from './jwt.service';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { Model } from 'mongoose';
import { User } from '../users/interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly jwtService: JWTService,
        ) { }

    async validateLogin(email, password) {
        const userFromDb = await this.userModel.findOne({ email });
        if (!userFromDb) {
            throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
        }
        // if (!userFromDb.auth.email.valid) {
        //     throw new HttpException('LOGIN.EMAIL_NOT_VERIFIED', HttpStatus.FORBIDDEN);
        // }

        const isValidPass = await bcrypt.compare(password, userFromDb.password);

        if (isValidPass) {
            const accessToken = await this.jwtService.createToken(email, userFromDb.roles);
            return  { token: accessToken.access_token, user: new UserDto(userFromDb)};
        } else {
            throw new HttpException('LOGIN.ERROR', HttpStatus.UNAUTHORIZED);
        }

    }
}
