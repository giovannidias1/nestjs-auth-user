import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
export declare class ItemsResolver {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    items(): Promise<ItemType[]>;
    createItem(input: ItemInput): Promise<ItemInput>;
    updateItem(id: string, input: ItemInput): Promise<ItemInput>;
    deleteItem(id: string): Promise<ItemInput>;
}
