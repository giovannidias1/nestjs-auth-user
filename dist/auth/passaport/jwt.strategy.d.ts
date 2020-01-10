import { JWTService } from '../jwt.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly jwtService;
    constructor(jwtService: JWTService);
    validate(payload: any, req: any, done: (ex: any, user: any) => void): Promise<void>;
}
export {};
