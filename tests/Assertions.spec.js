const { test, expect } = require("@playwright/test");
test("Assertions test", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://demo.nopcommerce.com/register");

  // 1. expect(page).toHaveURL() method - Page has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2. expect(page).toHaveTitle() method - Page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 3. expect(locator).toBeVisible() method - Element is visible
  const logoElement = page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  // 4. expect(locator).toBeEnabled() method - Element is enabled
  //    expect(locator).toBeDisabled() method - Element is disabled
  const searchInputField = page.locator("id=small-searchterms");
  await expect(searchInputField).toBeEnabled();

  // 5. expect(locator).toBeChecked() method - Radio/Checkbox is checked
  //    expect(locator).toBeUnchecked() method - Radio/Checkbox is unchecked

  // Radio button
  const maleRadioButton = page.locator("#gender-male");
  await maleRadioButton.click(); // select the radio button
  await expect(maleRadioButton).toBeChecked();

  // Checkbox
  const newsletterCheckbox = page.locator("#Newsletter");
  await newsletterCheckbox.click(); // select the checkbox
  await expect(newsletterCheckbox).not.toBeChecked();

  // 6. expect(locator).toHaveAttribute() method - Element has specific attribute
  const regButton = page.locator("#register-button");
  await expect(regButton).toHaveAttribute("type", "submit");

  // 7. expect(locator).toHaveText() method - Element has specific text
  await expect(page.locator(".page-title h1")).toHaveText("Register");

  // 8. expect(locator).toContainText() method - Element contains partial text
  await expect(page.locator(".page-title h1")).toContainText("Reg");

  // 9. expect(locator).toHaveValue() method - Input field has specific value
  const emailInput = page.locator("#Email");
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  // 10. expect(locator).toHaveCount() method - Element has specific count - useful for dropdowns
  // Ex: const options = await page.locator("select[name='DateOfBirthDay'] option");
  const options = await page.locator("#Email");
  await expect(options).toHaveCount(1);
});
