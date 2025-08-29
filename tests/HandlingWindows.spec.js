const { test, expect, chromium } = require("@playwright/test");

test("Handle Pages/Windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(); // once we create a context we can create N no of pages.

  // create pages with the freshly created context
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPages = context.pages();
  console.log("No of pages created: ", allPages.length);

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page1).toHaveTitle("OrangeHRM");

  await page2.goto("https://www.orangeHRM.com/");
  await expect(page2).toHaveTitle(
    "Human Resources Management Software | HRMS | OrangeHRM"
  );
});

test.only("Handle new Pages/Windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(); // once we create a context we can create N no of pages.

  // create pages with the freshly created context
  const page1 = await context.newPage();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page1).toHaveTitle("OrangeHRM");

  // click on a link and open a new page

  const pagePromise = context.waitForEvent("page");
  await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | HRMS | OrangeHRM"
  );

  await page1.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  await browser.close();
});
