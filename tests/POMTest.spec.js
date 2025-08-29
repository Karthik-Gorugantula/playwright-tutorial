// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("Locators Test", async ({ page }) => {
  // Login Page
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("pavanol", "test@123");
  await page.waitForTimeout(3000);

  // Home Page
  const homePage = new HomePage(page);
  await homePage.addProductToCart("Samsung galaxy s6");
  await page.waitForTimeout(3000);
  await homePage.gotoCart();

  // Cart Page
  const cartPage = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cartPage.checkProductInCart("Samsung galaxy s6");
  expect(await status).toBe(true);
});
