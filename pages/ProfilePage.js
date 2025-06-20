import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage {

    constructor(page){
        super(page);

        //Selectors
        this.deleteProfile_button = '.delete-account-text';
        this.other_radio = '.radio-btn-wrapper .radio-btn';
        this.textFieldDelete = '[class*="ws-input"][class*="ws-input-v2"] input';
        this.last_deleteButton = '.ws-btn-alert .ws-btn-content-slot';
        this.checkbox = '[type="checkbox"]';
        this.delete_and_cancel_button = '[aid="ws_button"]  .ws-btn-content-slot';
        this.seccess_message_title = '.pro-plan-canceled .title';
    };

    async deleteUser(){
        await this.click(this.deleteProfile_button);
        // await this.page.locator('.radio-btn-wrapper .radio-btn').nth(6).click()
        await this.clickByIndex(this.other_radio, 6);
        await this.fillByIndex(this.textFieldDelete, 6, 'I will not elaborate on that.');
        await this.click(this.last_deleteButton);
        await this.check(this.checkbox);
        await this.clickByRoleAndName('button', 'Delete Account');
    };

    async deleteUserValidation(){
        await this.expectToBeVisible(this.seccess_message_title);
        await this.expectToHaveText(this.seccess_message_title, 'Account successfully deleted');   
    };
};