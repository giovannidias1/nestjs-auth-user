import { ItemType } from '../../items/dto/create-item.dto';
export declare class UserDto {
    constructor(object: any);
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly birthdate: Date;
    readonly items: ItemType[];
}
