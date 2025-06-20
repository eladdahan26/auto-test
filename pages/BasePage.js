import { test, expect } from '@playwright/test';

export class BasePage {

    constructor(page){
        this.page = page;
    };

    async navigat(url){
        await this.page.goto(url);
    };

    async click(selector){
        await this.page.click(selector);
    };

    async clickByText(selector, text) {
        await this.page.locator(selector).filter({ hasText: text }).click();
    };

    async fill(selector, value){
        await this.page.fill(selector, value);
    };

    async getText(selector){
        await this.page.locator(selector).textContent();
    };

    async getAttribute(selector, attribute){
        return await this.page.locator(selector).getAttribute(attribute);
    };

    async expectToContainText(selector, text){
        await expect(this.page.locator(selector)).toContainText(text);
    };

    async expectToBeVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible({timeout: 10000 });
    };

    async expectToNotBeVisible(selector) {
        await expect(this.page.locator(selector)).not.toBeVisible({timeout: 10000 });
    };

    async expectToHaveText(selector, value){
        await expect(this.page.locator(selector)).toHaveText(value)
    };
    
    async waitForSeconds(seconds) {
        await this.page.waitForTimeout(seconds * 1000);
    };

    async clickByRole(role, options = {}) {
        await this.page.getByRole(role, options).click();
    };

    async clickByIndex(selector, index) {
        await this.page.locator(selector).nth(index).click();
    };

    async fillByIndex(selector, index, value) {
        await this.page.locator(selector).nth(index).fill(value);
    };

    async check(selector){
        await this.page.check(selector);
    };

    async clickByRoleAndName(role, name) {
        await this.page.getByRole(role, { name: name }).click();
    };
};