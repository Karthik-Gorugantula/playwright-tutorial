const { test, expect } = require("@playwright/test");

test("Soft Assertions test", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://demoblaze.com/index.html");

  /* // Issue with Hard assertions
  await expect(page).toHaveTitle("STORE123"); // intentionally wrong title to demonstrate hard assertion failure
  await expect(page).toHaveURL("https://demoblaze.com/index.html");
  await expect(page.locator(".navbar-brand")).toBeVisible();
  */

  // soft assertions
  await expect.soft(page).toHaveTitle("STORE"); // intentionally make it wrong title to demonstrate soft assertion
  await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});
