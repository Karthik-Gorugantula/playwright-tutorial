const { test, expect } = require("@playwright/test");
test("handle radio button", async ({ page }) => {
  // Navigate to the page with the radio button
  await page.goto("https://demo.nopcommerce.com/register");

  //Radio button
  await expect(page.locator("//input[@id='gender-male']")).not.toBeChecked();

  await page.locator("//input[@id='gender-male']").check();

  await expect(page.locator("//input[@id='gender-male']")).toBeChecked();

  expect(
    await page.locator("//input[@id='gender-male']").isChecked()
  ).toBeTruthy();

  expect(
    await page.locator("//input[@id='gender-female']").isChecked()
  ).toBeFalsy();

  await page.waitForTimeout(5000); // pausing code
});
