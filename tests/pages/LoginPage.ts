import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    readonly username: Locator;
    readonly password: Locator;
    readonly btnLogin: Locator;

    constructor(page : Page){
        super(page);
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.btnLogin = page.locator("#login-button");
    }

    async login(userName: string, passWord: string){
        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.btnLogin.click();
    }
}