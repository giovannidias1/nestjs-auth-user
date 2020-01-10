import { IsNotEmpty, IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  @IsNotEmpty()
  readonly firstName: string;
  @Field()
  @IsNotEmpty()
  readonly lastName: string;
  @Field()
  @IsNotEmpty()
  readonly email: string;
  @Field()
  @IsNotEmpty()
  password: string;
  @Field()
  @IsNotEmpty()
  readonly birthdate: Date;
}