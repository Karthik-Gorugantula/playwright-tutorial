const { expect, test } = require("@playwright/test");

test.skip("Single File upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForSelector("#singleFileInput");

  await page
    .locator("#singleFileInput")
    .setInputFiles("tests/uploadFiles/AWT Concepts.txt");

  await page.waitForTimeout(3000);
});

test("Multiple files upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForSelector("#multipleFilesInput");

  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "tests/uploadFiles/AWT Concepts.txt",
      "tests/uploadFiles/DSA Guide.txt",
    ]);

  await page.waitForTimeout(3000);

  // removing the uploaded files
  await page.locator("#multipleFilesInput").setInputFiles([]);

  await page.waitForTimeout(3000);
});
