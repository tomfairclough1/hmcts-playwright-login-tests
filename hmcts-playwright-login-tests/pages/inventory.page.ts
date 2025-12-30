import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly appLogo: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_container');
    this.appLogo = page.locator('.app_logo');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async verifyLoaded() {
  await expect(this.page).toHaveURL(/.*inventory.html/);
  await expect(this.appLogo).toHaveText('Swag Labs');
  await expect(this.inventoryContainer).toBeVisible();
}
}