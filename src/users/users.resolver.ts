import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './input-users.input';

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(() => [UserType])
    async users(): Promise<UserType[]> {
        return this.usersService.findAll();
    }

    @Query(() => UserType)
    async findUserById(
        @Args('id') id: string,
    ): Promise<UserType> {
        return this.usersService.findOne(id);
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: UserInput): Promise<UserInput> {
        return this.usersService.create(input);
    }

    @Mutation(() => UserType)
    async updateUser(
        @Args('id') id: string,
        @Args('input') input: UserInput,
    ): Promise<UserInput> {
        return this.usersService.update(id, input);
    }

    @Mutation(() => UserType)
    async deleteUser(@Args('id') id: string): Promise<UserInput> {
        return this.usersService.delete(id);
    }

}
