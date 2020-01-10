import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  readonly email: string;
  @Field()
  @IsNotEmpty()
  readonly password: string;

}