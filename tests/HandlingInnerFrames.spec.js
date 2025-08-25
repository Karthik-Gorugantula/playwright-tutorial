const { test, expect } = require("@playwright/test");

test("Handling Inner Frames in Playwright", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  frame3.locator("input[name='mytext3']").fill("welcome");

  // asserting elements that are inside nested frame

  const childFrames = await frame3.childFrames();
  await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();

  await page.waitForTimeout(5000);
});
