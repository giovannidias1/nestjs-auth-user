import { AuthDto } from './dto/auth';
import { LoginInput } from './input-login.input';
import { Login } from './interfaces/login.interface';
import { AuthService } from './auth.service';
import { UserDto } from './../users/dto/user.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService){}
    @Mutation(() => AuthDto)
    async login(@Args('login') login: LoginInput): Promise<AuthDto> {
        return this.authService.validateLogin(login.email, login.password);
    }

}
