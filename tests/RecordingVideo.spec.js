// use this file to record videos by pasting the target test's code in here

const { test, expect } = require("@playwright/test");
test("handle inputbox", async ({ page }) => {
  // Navigate to the page with the input box
  await page.goto("https://demo.nopcommerce.com/register");

  // Inputbox-firstname
  await expect(page.locator("//input[@id='FirstName']")).toBeVisible();
  await expect(page.locator("//input[@id='FirstName']")).toBeEmpty();
  await expect(page.locator("//input[@id='FirstName']")).toBeEditable();
  await expect(page.locator("//input[@id='FirstName']")).toBeEnabled();

  await page.locator("//input[@id='FirstName']").fill("Karthik");

  await page.waitForTimeout(5000); // pausing code
});
