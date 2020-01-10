import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@ObjectType()
export class UserType {
  @Field(() => ID)
  @IsNotEmpty()
  readonly id?: string;
  @Field()
  @IsNotEmpty()
  readonly firstName: string;
  @Field()
  @IsNotEmpty()
  readonly lastName: string;
  @Field()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @Field()
  @IsNotEmpty()
  password: string;
  @Field()
  @IsNotEmpty()
  readonly birthdate: Date;
}
