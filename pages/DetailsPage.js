import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DetailsPage extends BasePage {

    constructor(page){
        super(page);

        //Selectors
        this.nameField = '[name="name"]';
        this.titleField = '[name="title"]';
        this.companyField = '[name="company"]';
        this.phoneField = '[name="phone"]';
        this.mobileField = '[name="mobile"]';
        this.websiteField = '[name="website"]';
        this.emailField = '[name="email"]';
        this.addressField = '[name="address"]';
    }

    async enteringDetailsInTheSignatureFields(name, title, company, phone, mobile, website, email, address){
        await this.fill(this.nameField, name);
        await this.fill(this.titleField, title);
        await this.fill(this.companyField, company);
        await this.fill(this.phoneField, phone);
        await this.fill(this.mobileField, mobile);
        await this.fill(this.websiteField, website);
        await this.fill(this.emailField, email);
        await this.fill(this.addressField, address);
    };
};
