import { UserDto } from './../../users/dto/user.dto';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthDto {
  @Field({ description: 'JWT Beare token' })
  token: string;

  @Field(type => UserDto)
  user: UserDto;
}
