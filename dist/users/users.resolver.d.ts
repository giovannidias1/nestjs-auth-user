import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './input-users.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<UserType[]>;
    findUserById(id: string): Promise<UserDto>;
    createUser(input: UserInput): Promise<UserInput>;
    updateUser(id: string, input: UserInput): Promise<UserInput>;
    deleteUser(id: string): Promise<UserInput>;
}
