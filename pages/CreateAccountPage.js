import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateaAccountPage extends BasePage {

    constructor(page){
        super(page);

    //Selectors
    this.url = 'https://webapp.qa5.wisestamp-dev.com/editor';
    this.signInButton = '[aid="header.button.login"]';
    this.create_button = '[aid="modal.signin.button.signup"]';
    this.email_textField = '#signup_email_input';
    this.name_textField = '#signup_name_input';
    this.password_textField = '#signup_password_input';
    this.signUp_button = '.signup-popup-button';
    this.numberOfEmployeesButtoninTheCompany = '[aid="onboarding_company_size_0"]';
    this.continue_button_afterNumber = '[aid="setupAccountModal.button"] .ws-btn-content';
    this.mySelf_button = '[aid="onboarding_company_size_0"]';
    this.continue_button_afterMySelf = '[aid="setupAccountModal.button"]';
    this.x_popupButton = '.webapp-icon-close';
    this.login_button = '[aid="header.button.login"]';
    };

    async navigatToLogin(){
        await this.navigat(this.url);
    };

    async createAnAccount(email, name , password){
        await this.click(this.signInButton);
        await this.click(this.create_button);
        await this.waitForSeconds(1);
        await this.fill(this.email_textField, email);
        await this.fill(this.name_textField, name);
        await this.fill(this.password_textField, password);
        await this.waitForSeconds(1);
        await this.click(this.signUp_button);
        await this.click(this.numberOfEmployeesButtoninTheCompany);
        await this.click(this.continue_button_afterNumber);
        await this.click(this.mySelf_button);
        await this.click(this.continue_button_afterMySelf);
        await this.click(this.x_popupButton);
    };

    async createUserValidation(){
        await this.expectToNotBeVisible(this.login_button);
    };
};