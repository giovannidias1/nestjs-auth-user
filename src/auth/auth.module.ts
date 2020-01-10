import { JwtStrategy } from './passaport/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './../users/users.service';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JWTService } from './jwt.service';
import { UsersSchema } from 'src/users/users.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'User', schema: UsersSchema },
  ])],
  providers: [AuthService, UsersService, AuthResolver, JWTService, JwtStrategy]
})
export class AuthModule { }
