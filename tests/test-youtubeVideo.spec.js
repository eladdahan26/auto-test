// @ts-check
import { test, expect } from '@playwright/test';
import { EditorMenuPage } from '../pages/EditorMenuPage';
import { AppsPage } from '../pages/AppsPage';
import { LoginPage } from '../pages/LoginPage';
import { MySignatruesPage } from '../pages/MySignatruesPage';
import { VideoPage } from '../pages/VideoPage';
import userData from './test-data/users.json';

test('Filling out a form and selecting buttons after clicking on apps and videos', async ({ page }) => {
  
    // Initialize page objects
    const user = userData.users[0];
    const loginPage = new LoginPage(page);
    const mySignatruesPage = new MySignatruesPage(page);
    const editorMenuPage = new EditorMenuPage(page);
    const appsPage = new AppsPage(page);
    const videoPage = new VideoPage(page);

    //Login with user
    await loginPage.navigatToLogin();
    await loginPage.login(user.email, user.password);

    //Click for edit my signatrue and closing popup
    await mySignatruesPage.editMySignatrue();
    await mySignatruesPage.closingPopupEarlyBirdDiscount();

    //Click on Apps button
    await editorMenuPage.navigateToAppsPage();

    //Click on Apps button
    await appsPage.clickOnVideoButton();

    //Entering text and links in YouTube video fields
    await videoPage.enteringTextAndLinksInYouTubeVideoFields('https://www.youtube.com/watch?v=F7rFmAn_HF0', 'Shōgun - Japanese Zen');

    //Click on Orange color button
    await videoPage.clickOnFontColor();

    //Dragging the font size button to increase the font size
    await videoPage.changeFontSize(45);

    //Validtae the video details appear in the signature
    await videoPage.detailsValidation('https://www.youtube.com/watch?v=F7rFmAn_HF0', '13px');
});


