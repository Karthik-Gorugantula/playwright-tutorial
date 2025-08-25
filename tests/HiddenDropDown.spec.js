const { test, expect } = require("@playwright/test");
test("Hidden Dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();

  await page.waitForSelector('//span[normalize-space()="PIM"]');
  await page.locator('//span[normalize-space()="PIM"]').click();

  await page.waitForTimeout(5000);

  const options = await page.$$("//div[@role='listbox']//span");
  for (let option of options) {
    const value = await option.textContent();
    if (value.includes("Automation Tester")) {
      await option.click();
      break; // Click the first matching option and exit the loop
    }
  }

  await page.waitForTimeout(5000);
});
