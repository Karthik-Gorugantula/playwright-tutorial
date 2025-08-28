const { expect, test } = require("@playwright/test");

test("page screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("full page screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test("element screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.locator("//div[@id='contcont']//div[4]").screenshot({
    path: "tests/screenshots/" + Date.now() + "SamsungGalaxyS7.png",
  });
});
