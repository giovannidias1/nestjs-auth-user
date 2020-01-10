import { AuthDto } from './dto/auth';
import { LoginInput } from './input-login.input';
import { AuthService } from './auth.service';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginInput): Promise<AuthDto>;
}
