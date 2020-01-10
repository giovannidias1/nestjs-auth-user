import { UserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { UserType } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserInput } from './input-users.input';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: UserInput): Promise<UserType>;
    findAll(): Promise<UserType[]>;
    findOne(id: string): Promise<UserDto>;
    delete(id: string): Promise<UserType>;
    update(id: string, user: User): Promise<UserType>;
    findByEmail(email: string): Promise<User>;
    isValidEmail(email: string): boolean;
}
