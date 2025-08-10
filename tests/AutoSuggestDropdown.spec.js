const { test, expect } = require("@playwright/test");
test("AutoSuggest Dropdown", async ({ page }) => {
  await page.goto("https://shop.advanceautoparts.com");

  await page.locator("#search-input").fill("car");

  // Wait for the auto-suggest dropdown to appear
  await page.waitForSelector(".css-1w18cj3-option, .css-19noa0r-option");
  const options = await page.$$(".css-1w18cj3-option, .css-19noa0r-option");
  await expect(options.length).toBe(11);

  for (const option of options) {
    const value = await option.textContent();
    if (value.includes("Utility Cart")) {
      await option.click();
      break; // Click the first matching option and exit the loop
    }
  }
});
