const { test, expect } = require("@playwright/test");

test.skip("Handling Alert Box in Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Before handling the alert window and performing assertion on it we need to enable it first.
  // Enable the alert handling / Dialog alert handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click('//button[@id="alertBtn"]');
});

test.skip("Handling Confirmation Box in Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Before handling the alert window and performing assertion on it we need to enable it first.
  // Enable the alert handling / Dialog alert handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
  });

  await page.click('//button[@id="confirmBtn"]');
  await expect(await page.locator("//p[@id='demo']").textContent()).toBe(
    "You pressed OK!"
  );

  // the execution is so fast that we can even see it happening
  await page.waitForTimeout(5000);
});

test("Handling Prompt Box in Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Before handling the alert window and performing assertion on it we need to enable it first.
  // Enable the alert handling / Dialog alert handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Okay Nigga");
    // await dialog.dismiss(); -> used to close by cancelling the prompt
  });

  await page.click('//button[@id="promptBtn"]');

  // the execution is so fast that we can even see it happening
  await page.waitForTimeout(5000);
});
