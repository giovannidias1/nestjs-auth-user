import { Document } from 'mongoose';
export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    password: string;
    readonly birthdate: Date;
}
