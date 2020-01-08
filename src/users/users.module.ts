import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './users.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
