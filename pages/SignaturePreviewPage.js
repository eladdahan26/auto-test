import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { MySignatruesPage } from '../pages/MySignatruesPage';

export class SignaturePreviewPage extends BasePage {

    constructor(page){
        super(page);

        //Selectors
        this.nameField = '[name="name"]';
        this.previewName = '[data-acs="name"]';
        this.sigName = '.ws-global-dropdown .value-label';
    };

    async detailsValidation(text){
        await this.expectToContainText(this.previewName, text);
    };

    async sigNameValidation(text){
        await this.waitForSeconds(2);
        await expect(this.page.locator(this.sigName)).toHaveText(text);
    };
};