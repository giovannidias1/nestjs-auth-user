import { Model } from 'mongoose';
import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemInput } from './input-items.input';
export declare class ItemsService {
    private itemModel;
    constructor(itemModel: Model<Item>);
    create(createItemDto: ItemInput): Promise<ItemType>;
    findAll(): Promise<ItemType[]>;
    findOne(id: string): Promise<ItemType>;
    delete(id: string): Promise<ItemType>;
    update(id: string, item: Item): Promise<ItemType>;
}
