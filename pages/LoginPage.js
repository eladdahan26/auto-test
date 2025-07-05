import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page){
        super(page);

    //Selectors
    this.url = 'https://webapp.qa5.wisestamp-dev.com/editor';
    this.signInButton = '[aid="header.button.login"]';
    this.emailField = '#login_email_input';
    this.passwordField = '[type="password"]';
    this.submitButton = '[type="submit"]';

    };

    async navigatToLogin(){
        await this.navigat(this.url);
    };

    async login(email, password){
        await this.click(this.signInButton);
        await this.fill(this.emailField, email);
        await this.fill(this.passwordField, password);
        await this.click(this.submitButton);

    };
};