// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("Locators Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  // click on login button - property
  // await page.locator('id=login2').click();
  await page.click("id=login2");

  // provide username - CSS
  // await page.locator("#loginusername").fill("testuser");
  await page.fill("#loginusername", "pavanol");
  // await page.type("#loginusername", "testuser");

  // provide password - combination of tag and id attribute
  await page.fill("input[id='loginpassword']", "test@123");

  // click on login button - xpath
  await page.click("//button[normalize-space()='Log in']");

  // verify logout link presence - xpath
  const logoutLink = page.locator("(//a[normalize-space()='Log out'])[1]");

  await expect(logoutLink).toBeVisible();

  await page.close();
});
