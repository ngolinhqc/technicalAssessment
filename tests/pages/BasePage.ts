import { Page } from '@playwright/test';
import ExcelJS from 'exceljs';
export class BasePage{

    readonly page: Page;

    constructor(page : Page){
        this.page = page;
    }

    async navigateTo(){
        await this.page.goto('/');
    }

    async listItemFile(filePath: string, colNum: number): Promise<string[]>{
        let listItem : string[] = [];
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet('ITEMS');
        worksheet?.eachRow((row, rowNumber) =>{
            if(rowNumber === 1) return;
            const cell = row.getCell(colNum);
            if(cell.value){
                listItem.push(cell.value.toString());
            }
        })
        return listItem;
    }
}