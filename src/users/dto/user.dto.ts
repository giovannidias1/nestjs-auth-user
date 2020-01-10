import { ItemDto } from './../../items/dto/item.dto';
import { ItemType } from '../../items/dto/create-item.dto';
import { ObjectType, Field } from 'type-graphql';
@ObjectType()
export class UserDto {
    constructor(object: any) {
        this.id = object.id;
        this.firstName = object.firstName;
        this.lastName = object.lastName;
        this.email = object.email;
        this.birthdate = object.birthdate;
        this.items = object.items;
    }
    @Field()
    readonly id: string;
    @Field()
    readonly firstName: string;
    @Field()
    readonly lastName: string;
    @Field()
    readonly email: string;
    @Field()
    readonly birthdate: Date;
    @Field(() => [ItemDto])
    readonly items: ItemType[];
}
