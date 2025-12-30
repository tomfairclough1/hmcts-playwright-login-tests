import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  authenticatedPage: Page; // Pre-logged in page
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await use(loginPage);
    
    // Teardown: Clear cookies and storage after each test
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  // Fixture for tests that need to start already logged in
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForURL(/.*inventory.html/);
    
    await use(page);
    
    // Teardown: Logout and clear session
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
  },
});

export { expect } from '@playwright/test';