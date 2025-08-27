const { test, expect } = require("@playwright/test");

test("Keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  // await page.locator('name="text1"').fill("Welcome to automation");

  await page.fill('[name="text1"]', "Welcome to automation"); // we can use type also, but it is a deprecated method

  // keyboard action methods:
  //  press() - used for pressing a combination of keys at a time
  //  down()  - used to press and hold a single key
  //  up()    - used to release a key that we have been holding

  // ctrl + A
  await page.keyboard.press("Control+A");

  // ctrl + C
  await page.keyboard.press("Control+C");

  // TAB
  await page.keyboard.down("Tab"); // press the key
  await page.keyboard.up("Tab"); // release the key

  // ctrl + V
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(3000);
});
