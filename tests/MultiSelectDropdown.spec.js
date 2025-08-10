const { test, expect } = require("@playwright/test");

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // select multiple options from multi-select dropdown
  await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  // assertions
  // 1. check number of options in dropdown
  const optionsCount = page.locator("#colors option");
  await expect(optionsCount).toHaveCount(7);

  // 2. check number of options in dropdown using JS Array
  const optionsArray = await page.$$("#colors option");
  await expect(optionsArray.length).toBe(7);

  // 3. presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  await expect(content.includes("Blue")).toBeTruthy();
  await expect(content.includes("Black")).not.toBeTruthy();
  await expect(content.includes("Black")).toBeFalsy();

  await page.waitForTimeout(5000);
});
