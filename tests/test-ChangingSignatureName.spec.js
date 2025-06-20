import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MySignatruesPage } from '../pages/MySignatruesPage';
import { SignaturePreviewPage } from '../pages/SignaturePreviewPage';
import userData from './test-data/users.json';

test('Changing the name of the signature and Validate', async({page}) => {

    // Initialize page objects
    const user = userData.users[0];
    const loginPage = new LoginPage(page);
    const mySignatruesPage = new MySignatruesPage(page);
    const signaturePreviewPage = new SignaturePreviewPage(page);
     
    //Login with user
    await loginPage.navigatToLogin();
    await loginPage.login(user.email, user.password);

    //Click for edit my signatrue and closing popup
    await mySignatruesPage.editMySignatrue();
    await mySignatruesPage.closingPopupEarlyBirdDiscount();

    //Click on actions button and rename button
    await mySignatruesPage.clickOnActionsButton();
    await mySignatruesPage.clickOnRenameButton();

    //Change signature title
    const newTitle = await mySignatruesPage.ChangeSignatureTitleInPopup(); // new signature

    //Validate a green message of successful signature change appears
    await mySignatruesPage.greenMessageValidation();

    //Validate The name of the signature appears
    await signaturePreviewPage.sigNameValidation(newTitle);
});