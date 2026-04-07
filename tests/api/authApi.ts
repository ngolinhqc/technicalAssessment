import { APIRequestContext, request, expect } from '@playwright/test';
export class authApi{
    private apiContext: APIRequestContext;
    constructor(apiContext: APIRequestContext){
        this.apiContext = apiContext;
    }
}