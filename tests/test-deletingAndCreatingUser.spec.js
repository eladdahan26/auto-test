import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MySignatruesPage } from '../pages/MySignatruesPage';
import { ProfilePage } from '../pages/ProfilePage';
import { CreateaAccountPage } from '../pages/CreateAccountPage';
import userData from './test-data/users.json';

test('Deleting a user and creating a new user', async({page}) => {

    // Initialize page objects
    const user = userData.users[0];
    const loginPage = new LoginPage(page);
    const mySignatruesPage = new MySignatruesPage(page);
    const profilePage = new ProfilePage(page);
    const createaAccountPage = new CreateaAccountPage(page);

    //Login with user
    await loginPage.navigatToLogin();
    await loginPage.login(user.email, user.password);

    //Delete user
    await mySignatruesPage.navigateToProfilePage();
    await profilePage.deleteUser();

    //Validate The user has been deleted
    await profilePage.deleteUserValidation();

    //Create a user
    await createaAccountPage.navigatToLogin();
    await createaAccountPage.createAnAccount(user.email, user.name, user.password);

    //Validate the user is created
    await createaAccountPage.createUserValidation();
});