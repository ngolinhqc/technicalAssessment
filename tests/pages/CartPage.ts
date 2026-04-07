import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    readonly inventoryName: Locator;
    constructor(page: Page){
        super(page);
        this.inventoryName = page.locator(".inventory_item_name");
    }

    async isAllItemDiplay(filePath: string, colNum: number){
        const itemsName: string[] = await this.listItemFile(filePath, colNum);
        const itemsCount = itemsName.length;
        const itemNum = await this.inventoryName.count();
        let numAdded = 0;
        for(const itemName of itemsName){
            for(let i = 0; i< itemNum; i++){
                const itemAdded: string|null = await this.inventoryName.nth(i).textContent();
                if(itemAdded?.toLowerCase().includes(itemName.toLowerCase())){
                    numAdded++;
                }
            }
        }
        if( itemsCount === numAdded)
        return true;
    }
}