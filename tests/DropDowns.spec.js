const { test, expect } = require("@playwright/test");

test("handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // multiple ways to select options from the dropdown

  // 1. using label/visible text (popular approach)
  await page.locator("#country").selectOption({ label: "India" }); //label/ visible text

  // 2. using visible text directly
  await page.locator("#country").selectOption("India"); //visible text

  // 3. using value attibute of the option tag
  await page.locator("#country").selectOption({ value: "uk" }); //value

  // 4. using index of the option tag - we need to start couting manually for this approach
  await page.locator("#country").selectOption({ index: 2 }); //index starts from 0

  // 5. using the select option method directly
  await page.selectOption("#country", { label: "Australia" }); //label/ visible text

  // -------------------------------------------------------------------------------------------------------------

  // Assertions
  // 1. check number of options in dropdown
  const options = await page.locator("#country option");
  await expect(options).toHaveCount(10);

  // 2. check number of options in dropdown when we are unsure about the total number of options in the dropdown
  const optionsCount = await page.$$("#country option");
  console.log("Number of options:", optionsCount.length);
  await expect(optionsCount.length).toBe(10);

  // 3. check the presence of some option in the dropdown
  const optionExists = await page.locator("#country").textContent();
  await expect(optionExists.includes("India")).toBeTruthy();

  // 4. Check the presence of value in the dropdown - Approach 2 - using looping
  const optionsArray = await page.$$("#country option");
  let status = false;
  for (const option of optionsArray) {
    let value = await option.textContent("value");
    if (value.includes("France")) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();

  // 5. select option from dropdown using loop - Not an assertion
  const countriesOptions = await page.$$("#country option");
  for (const option of countriesOptions) {
    let value = await option.textContent();
    console.log("Country:", value);
    if (value.includes("India")) {
      await page.selectOption("#country", "India"); // select option using label
      break;
    }
  }

  // -------------------------------------------------------------------------------------------------------------

  await page.waitForTimeout(5000); // wait for 2 seconds to see the selection
});
