import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AppsPage extends BasePage {

    constructor(page){
        super(page);

        //Selectors
        this.videoButton = '.webapp-icon-youtube_status';
    }

    async clickOnVideoButton(){
        await this.click(this.videoButton);
    };
};