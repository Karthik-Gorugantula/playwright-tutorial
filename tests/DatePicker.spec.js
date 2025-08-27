const { test, expect } = require("@playwright/test");

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // we can use this fill method if the website is allowing
  // await page.fill("#datepicker", "03/15/2024");

  // if not we need to think of a logic to handle it
  const year = "2025";
  const month = "August";
  const date = "20";

  const calender = await page.click("#datepicker"); // open calender

  // this is used to set the current month and year to a desired date and month
  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear === year && currentMonth === month) break;

    const prev = await page.locator(".ui-icon.ui-icon-circle-triangle-w");
    const next = await page.locator(".ui-icon.ui-icon-circle-triangle-e");

    if (year < currentYear) prev.click();
    else if (year > currentYear) next.click();
    else {
      if (month < currentMonth) prev.click();
      else next.click();
    }
  }

  // now we need to click on the day from the target month and year
  // can be also written using xpath as: await page.$$("//a[@class='ui-state-default']")
  const days = await page.$$(".ui-state-default");
  for (const day of days) {
    if ((await day.textContent()) == date) {
      await day.click();
      break;
    }
  }

  // using xpath directly
  await page.$$(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(3000);
});
