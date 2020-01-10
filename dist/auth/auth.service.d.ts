import { UserDto } from './../users/dto/user.dto';
import { JWTService } from './jwt.service';
import { Model } from 'mongoose';
import { User } from '../users/interfaces/user.interface';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JWTService);
    validateLogin(email: any, password: any): Promise<{
        token: any;
        user: UserDto;
    }>;
}
