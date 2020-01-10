import { Model } from 'mongoose';
import { User } from '../users/interfaces/user.interface';
export declare class JWTService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createToken(email: any, roles: any): Promise<{
        expires_in: number;
        access_token: any;
    }>;
    validateUser(signedUser: any): Promise<User>;
}
