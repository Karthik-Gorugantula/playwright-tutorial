const { expect, test } = require("@playwright/test");

test("Mouse double click handler", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  expect(await page.locator("//input[@id='field2']")).toHaveValue("");

  const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

  // double click
  await btnCopy.dblclick();

  expect(await page.locator("//input[@id='field2']")).toHaveValue(
    "Hello World!"
  );

  await page.waitForTimeout(3000);
});
