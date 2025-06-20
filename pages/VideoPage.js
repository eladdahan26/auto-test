import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class VideoPage extends BasePage{

    constructor(page){
        super(page);

        //Selectors
        this.youtubeVideoField = '[name="video_url"]';
        this.playlistTitle = '[name="user_title"]';
        this.orangColorButton = '[ke="#FF6009"]';
        this.fontSizeButton = '.vue-slider-dot[role="slider"]';
        this.youtubePreviewField = '[style="line-height: 11px"] a';
        this.fontSizePreviewField = '[style="line-height: 11px"] span';
    };

    async enteringTextAndLinksInYouTubeVideoFields(url, text){
        await this.fill(this.youtubeVideoField, url);
        await this.fill(this.playlistTitle, text);
    };

    async clickOnFontColor(){
        await this.click(this.orangColorButton);
    };

    async changeFontSize(number){
        const slider = this.page.locator(this.fontSizeButton);
        const box = await slider.boundingBox();
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;
        await this.page.mouse.move(x, y);
        await this.page.mouse.down();
        await this.page.mouse.move(x + number, y);
        await this.page.mouse.up();
    };

    async detailsValidation(youtubeUrl, expectedSize) {
        const youtubePreview = await this.getAttribute(this.youtubePreviewField, 'href');
        expect(youtubeUrl).toBe(youtubePreview);
        await this.waitForSeconds(1)
        const style = await this.getAttribute(this.fontSizePreviewField, 'style');
        const fontSize = style.split('font-size:')[1].split(';')[0].trim();
        expect(fontSize).toBe(expectedSize);
    };
};
