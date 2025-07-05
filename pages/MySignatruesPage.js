import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MySignatruesPage extends BasePage{

    constructor(page){
        super(page);

        //Selectors
        this.editButton = '.signature-item-edit-btn-text';
        this.xButton = '[data-icon="times"]';
        this.actionsButton = '.sw-icon-chevron-down';
        this.renameButton = '.sw-icon-rename';
        this.signatureTitleField = '.one-sig-rename-input';
        this.renameSignatureButton = '.one-sig-rename-btn-rename';
        this.greenMessage = '.ws-notification-template--success';
        this.textGreenMessage = '.ws-notification-text';
        this.sigName = '.ws-global-dropdown .value-label';
        this.user_button = '.webapp-icon-user';
        this.profile_button = '.sw-icon-user-circle';
        this.deleteProfile_button = '.delete-account-text';
        this.other_radio = '.radio-btn-wrapper .radio-btn';
        this.textFieldDelete = '[class*="ws-input"][class*="ws-input-v2"] input';
        this.last_deleteButton = '.ws-btn-alert .ws-btn-content-slot';
        this.logout_button = '.sw-icon-logout';
    };

    async editMySignatrue(){
        await this.click(this.editButton);
    };

    async closingPopupEarlyBirdDiscount(){
        await this.click(this.xButton);
    };

    async clickOnActionsButton(){
        await this.click(this.actionsButton);
    };

    async clickOnRenameButton(){
        await this.click(this.renameButton);
    };

    async clickOnLogoutButton(){
        await this.click(this.logout_button);
    }

    async ChangeSignatureTitleInPopup(){
        const currentSigName = await this.page.locator(this.sigName).innerText();
        let newTitle;
        if (currentSigName.includes('New Signature')) {
            newTitle = 'Elad DAahan';
        } else {
            newTitle = 'New Signature';
        };
        await this.fill(this.signatureTitleField, newTitle);
        await this.click(this.renameSignatureButton);
        return newTitle;
    };
    
    async greenMessageValidation(){
        await this.waitForSeconds(2)
        const currentSigName = await this.page.locator(this.sigName).innerText();
        await this.expectToBeVisible(this.greenMessage);
        await this.expectToHaveText(this.textGreenMessage, `Signature has been renamed to ${currentSigName}!`);
    };

    async navigateToProfilePage(){
        await this.click(this.user_button);
        await this.click(this.profile_button);
    };
};