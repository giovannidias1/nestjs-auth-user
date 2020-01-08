import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { ItemSchema } from './item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Items', schema: ItemSchema }])],
  providers: [ItemsService, ItemsResolver],
})
export class ItemsModule { }
