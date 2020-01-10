import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { ItemsSchema } from './item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemsSchema }])],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule { }
