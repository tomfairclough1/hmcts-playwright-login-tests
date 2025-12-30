import { test, expect } from '../utils/fixtures';
import { expectedResults, testUsers } from '../utils/test-data';

test.describe('Login Tests', () => {

  test.describe('Successful Login Tests', () => {

    test('Successful Login - Login successfully with valid credentials', async ({ loginPage, inventoryPage, page }) => {
      const user = testUsers.valid.standard;

      await loginPage.login(user.username, user.password);
      await inventoryPage.isLoggedIn(expectedResults.successUrl, expectedResults.appTitle);

    });
  });

  test.describe('Failed Login - Invalid Credentials', () => {
    // Data-driven test for invalid credentials
    const invalidCredentials = [
      { name: 'non-existent user', data: testUsers.invalid.nonExistent },
      { name: 'wrong password', data: testUsers.invalid.wrongPassword },
    ];

    for (const { name, data } of invalidCredentials) {
      test(`Failed Login - Invalid Credentials - ${name}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(data.expectedError);
      });
    }

    test('Failed Login - Locked Out User', async ({ loginPage }) => {
      const user = testUsers.invalid.locked;

      await loginPage.login(user.username, user.password);

      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(user.expectedError);
    });
  });

  test.describe('Failed Login - Empty Fields', () => {
    // Data-driven test for empty fields
    const emptyFieldTests = [
      { name: 'username is empty', data: testUsers.empty.noUsername },
      { name: 'password is empty', data: testUsers.empty.noPassword },
      { name: 'both fields are empty', data: testUsers.empty.bothEmpty },
    ];

    for (const { name, data } of emptyFieldTests) {
      test(`Failed Login - Empty Fields - ${name}`, async ({ loginPage }) => {
        await loginPage.login(data.username, data.password);

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(data.expectedError);
      });
    }
  });
});
