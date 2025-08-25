const { test, expect } = require("@playwright/test");

async function checkProductCheckbox(rows, page, productName) {
  const matchedRow = rows.filter({
    has: page.locator("td", { hasText: productName }),
  });
  expect(await matchedRow.locator("input").isChecked()).toBeFalsy();
  await matchedRow.locator("input").check();
  expect(await matchedRow.locator("input").isChecked()).toBeTruthy();
}

test("Handling Tables in Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  // 1) total number of rows and columns
  const columns = await table.locator("thead tr th");
  console.log("Total number of columns:", await columns.count());

  const rows = await table.locator("tbody tr");
  console.log("Total number of rows:", await rows.count());

  expect(await columns.count()).toBe(4);
  expect(await rows.count()).toBe(5);

  // 2) asserting a specific row in the pagination table to have its checkbox checked

  /* 
  const matchedRow = rows.filter({
    has: page.locator("td", { hasText: "Smartwatch" }),
  });

  expect(await matchedRow.locator("input").isChecked()).toBeFalsy();
  await matchedRow.locator("input").check();
  expect(await matchedRow.locator("input").isChecked()).toBeTruthy();
  
    Problem with above code: Suppose we want to the same chore for multiple rows, then we have to repeat the same code again and again.
    So, we will create a reusable function for this. Done below.
  */

  // 3) create a reusable function to check the checkbox of a specific product
  await checkProductCheckbox(rows, page, "Smartwatch");
  await checkProductCheckbox(rows, page, "Laptop");
  await checkProductCheckbox(rows, page, "Tablet");

  await page.waitForTimeout(5000);

  // 4) print all the product details using the loop
  for (let i = 0; i < (await rows.count()); i++) {
    const currentRow = rows.nth(i);
    const tds = currentRow.locator("td");
    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  // 5) Implement the requirement 4 for multiple pages due to pagination (we need to repeat for all pages)

  // step #1: count all the pages in the pagination
  const pages = await page.locator(".pagination li a");
  console.log("Number of pages in the table: ", await pages.count());

  // step #2: repeat scenario #4 in for each page in the pagination
  for (let i = 0; i < (await pages.count()) - 1; ++i) {
    if (i > 0) await pages.nth(i).click();

    for (let i = 0; i < (await rows.count()); i++) {
      const currentRow = rows.nth(i);
      const tds = currentRow.locator("td");
      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(3000);
  }
});
