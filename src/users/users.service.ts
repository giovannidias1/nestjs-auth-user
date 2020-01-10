import { UserDto } from './dto/user.dto';
import { Injectable, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserInput } from './input-users.input';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async create(createUserDto: UserInput): Promise<UserType> {
        if (this.isValidEmail(createUserDto.email) && createUserDto.password) {
            const usedEmail = await this.findByEmail(createUserDto.email);
            if (!usedEmail) {
                createUserDto.password = await bcrypt.hash(createUserDto.password, saltRounds);
                const createdUser = new this.userModel(createUserDto);
                return await createdUser.save();
            } else {
                throw new HttpException('REGISTRATION.USER_ALREADY_REGISTERED', HttpStatus.FORBIDDEN);
            }

        } else {
            throw new HttpException('REGISTRATION.MISSING_MANDATORY_PARAMETERS', HttpStatus.FORBIDDEN);
        }

    }

    async findAll(): Promise<UserType[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: string): Promise<UserDto> {
        return await this.userModel.findOne({ _id: id }).populate('Items').exec();
    }

    async delete(id: string): Promise<UserType> {
        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<UserType> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }

    // async getOne(id: string): Promise<UserType> {
    //     try {
    //       return await this.userModel.findById(id).populate('items').exec();
    //     } catch (e) {
    //       throw new BadRequestException(e);
    //     }
    //   }

    isValidEmail(email: string) {
        if (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        } else {
            return false;
        }
    }
}
