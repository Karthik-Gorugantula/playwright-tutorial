const { expect, test } = require("@playwright/test");

test("Mouse Hover actions handling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");

  await page.locator("//button[normalize-space()='Point Me']").hover();
  await page.locator("//a[normalize-space()='Mobiles']").hover();

  await page.waitForTimeout(10000);
});
