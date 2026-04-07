import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage{
    //readonly btnAddCart: Locator;
    readonly inventoryItem: Locator;
    // readonly inventoryItemName: Locator;
    readonly cartLink: Locator;

    constructor(page: Page){
        super(page);
        this.inventoryItem = page.locator(".inventory_item");
        // this.inventoryItemName = this.inventoryItem.locator(".inventory_item_name ");
        // this.btnAddCart = this.inventoryItem.getByRole("button", {name: 'Add to cart'});
        this.cartLink = page.locator(".shopping_cart_link");

    }

    async addToCart(filePath: string, colNum: number){
        const itemsNum = await this.inventoryItem.count();
        const itemsName: string[] = await this.listItemFile(filePath, colNum);
        for(const itemNameAdd of itemsName){
            for(let i = 0; i < itemsNum;  i ++){
                let itemName = await this.inventoryItem.nth(i).locator(".inventory_item_name").textContent();
                if((itemName?.toLowerCase())?.includes(itemNameAdd?.toLowerCase())){
                    await this.inventoryItem.nth(i).getByRole("button", {name: 'Add to cart'}).click();
                    console.log("Item name:" + itemName);
                }
            }
        }
    }

    async navigateToCart(){
        await this.cartLink.click();
    }




}