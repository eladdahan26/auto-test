import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MySignatruesPage } from '../pages/MySignatruesPage';
import { DetailsPage } from '../pages/DetailsPage';
import { SignaturePreviewPage } from '../pages/SignaturePreviewPage';
import userData from './test-data/users.json';

    test('Entering details in the signature fields', async({page}) => {

        // Initialize page objects
        const user = userData.users[0];
        const loginPage = new LoginPage(page);
        const mySignatruesPage = new MySignatruesPage(page);
        const detailsPage = new DetailsPage(page);
        const signaturePreviewPage = new SignaturePreviewPage(page);

        //Login with user
        await loginPage.navigatToLogin();
        await loginPage.login(user.email, user.password);

        //Click for edit my signatrue and closing popup
        await mySignatruesPage.editMySignatrue();
        await mySignatruesPage.closingPopupEarlyBirdDiscount();

        //Entring Signature details field
        await detailsPage.enteringDetailsInTheSignatureFields('Elad', 'QA', 'YIT','089732994', '0509732994', 'Ynet', 'elad@test.com', 'TLV');
        
        //Validtae details appears in the Signature
        await signaturePreviewPage.detailsValidation('Elad'); 
    });
