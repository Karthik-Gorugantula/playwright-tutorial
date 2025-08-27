const { test, expect } = require("@playwright/test");

test("Mouse drag and drop actions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Static.html");

  const destination = await page.locator("//div[@id='droparea']");
  const source = await page.locator("//img[@id='angular']");

  // Approach 1

  //hover on the source image and clicks on the source image and holds it
  // await source.hover();
  // await page.mouse.down();

  // hover onto destination box and release the mouse holding
  // await destination.hover();
  // await page.mouse.up();

  // Approach 2
  await source.dragTo(destination);

  await page.waitForTimeout(3000);
});
