import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class EditorMenuPage extends BasePage{
    
    constructor(page){
        super(page);

        //Selectors
        this.appsButton = '.webapp-icon-widgets';
    };

    async navigateToAppsPage(){
        await this.click(this.appsButton);
    };
};