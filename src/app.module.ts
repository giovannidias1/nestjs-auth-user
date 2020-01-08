import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
      playground: true,
    }),
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/gantybd'),
    AuthModule,
    ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
