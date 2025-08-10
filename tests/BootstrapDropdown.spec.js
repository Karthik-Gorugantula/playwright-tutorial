const { test, expect } = require("@playwright/test");
test("Bootstrap Dropdown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click();

  //1
  const options = await page.locator("ul>li label input");
  await expect(options).toHaveCount(11);

  //2
  const optionsElements = await page.$$("ul>li label input");
  await expect(optionsElements.length).toBe(11);

  //3 select options from dropdown
  const optionsArray = await page.$$("ul>li label");
  for (let option of optionsArray) {
    const value = await option.textContent();
    if (value.includes("Angular") || value.includes("Java")) {
      await option.click();
    }
  }

  // deselect options
  for (let option of optionsArray) {
    const value = await option.textContent();
    if (value.includes("Angular") || value.includes("Java")) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
