const { test, expect } = require("@playwright/test");

test("Handle checkboxes", async ({ page }) => {
  await page.goto("https://www.ironspider.ca/forms/checkradio.htm");

  // single checkbox
  await page.check("//input[@value='red']");
  await expect(await page.locator("//input[@value='red']")).toBeChecked();
  await expect(
    await page.locator("//input[@value='red']").isChecked()
  ).toBeTruthy();
  await expect(
    await page.locator("//input[@value='blue']").isChecked()
  ).toBeFalsy();

  await page.waitForTimeout(5000);

  // multiple checkboxes
  const checkboxes = [
    "//input[@value='red']",
    "//input[@value='blue']",
    "//input[@value='green']",
  ];
  for (const locator of checkboxes) {
    await page.check(locator);
    await expect(await page.locator(locator)).toBeChecked();
  }
  for (const locator of checkboxes) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
      await expect(await page.locator(locator)).not.toBeChecked();
    }
  }
});
