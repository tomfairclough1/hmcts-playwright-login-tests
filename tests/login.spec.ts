import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify successful login by checking URL and page elements
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(loginPage.inventoryContainer).toBeVisible();
    await expect(loginPage.appLogo).toHaveText('Swag Labs');
  });

  test('should show error with invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    
    // Verify error message is displayed
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('should show error with locked out user', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });

  test('should show error when username is empty', async () => {
    await loginPage.login('', 'secret_sauce');
    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('should show error when password is empty', async () => {
    await loginPage.login('standard_user', '');
    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Password is required');
  });
});