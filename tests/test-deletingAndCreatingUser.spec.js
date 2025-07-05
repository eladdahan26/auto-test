import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MySignatruesPage } from '../pages/MySignatruesPage';
import { ProfilePage } from '../pages/ProfilePage';
import { CreateaAccountPage } from '../pages/CreateAccountPage';
import userData from './test-data/users.json';
import { faker } from '@faker-js/faker';
import { waitForDebugger } from 'inspector';

test('Deleting a user and creating a new user', async({page}) => {

    // Initialize page objects
    const user = userData.users[0];
    const loginPage = new LoginPage(page);
    const mySignatruesPage = new MySignatruesPage(page);
    const profilePage = new ProfilePage(page);
    const createaAccountPage = new CreateaAccountPage(page);
    const randomFullName = faker.person.fullName();
    const randomPassword = faker.internet.password();
    const randomEmail = `${faker.person.firstName()}${faker.number.int(100)}@gmail.com`;

    //Create a user
    await createaAccountPage.navigatToLogin();
    await createaAccountPage.createAnAccount(randomEmail, randomFullName, randomPassword);

    //Validate the user is created
    await createaAccountPage.createUserValidation();

    //Logout from the user
    await mySignatruesPage.clickOnLogoutButton()
    await expect(page).toHaveURL(/login/); 

    // ניקוי קאש אחרי התנתקות
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
    await page.evaluate(() => sessionStorage.clear());

    // //Login with user
    await loginPage.navigatToLogin();
    await loginPage.login(randomEmail, randomPassword);

    // //Delete user
    await mySignatruesPage.navigateToProfilePage();
    await profilePage.deleteUser();

    //Validate The user has been deleted
    await profilePage.deleteUserValidation();
});