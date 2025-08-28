const { expect, test } = require("@playwright/test");
const { afterEach } = require("node:test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto("https://demoblaze.com/index.html");

  // Login
  await page.locator("//a[@id='login2']").click();
  await page.fill("//input[@id='loginusername']", "pavanol");
  await page.fill("//input[@id='loginpassword']", "test@123");
  await page.click("//button[normalize-space()='Log in']");
});

test.afterAll(async () => {
  // Logout
  await page.click("//a[@id='logout2']");
});

test.skip("Home Page Test", async ({}) => {
  // await page.goto("https://demoblaze.com/index.html");

  // Login
  // await page.locator("//a[@id='login2']").click();
  // await page.fill("//input[@id='loginusername']", "pavanol");
  // await page.fill("//input[@id='loginpassword']", "test@123");
  // await page.click("//button[normalize-space()='Log in']");

  // Homepage
  const products = await page.$$(".card-block");
  expect(products).toHaveLength(9);

  // logout
  // await page.click("//a[@id='logout2']");
});

test("Add product to cart test", async ({}) => {
  // await page.goto("https://demoblaze.com/index.html");

  // Login
  // await page.locator("//a[@id='login2']").click();
  // await page.fill("//input[@id='loginusername']", "pavanol");
  // await page.fill("//input[@id='loginpassword']", "test@123");
  // await page.click("//button[normalize-space()='Log in']");

  await page.waitForTimeout(5000);

  // Homepage
  await page.click("//a[normalize-space()='Samsung galaxy s6']");

  await page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    dialog.accept();
    await page.waitForTimeout(5000);
  });

  await page.click("//a[normalize-space()='Add to cart']");

  // logout
  // await page.click("//a[@id='logout2']");
});
