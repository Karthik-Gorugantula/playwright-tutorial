const { expect, test } = require("@playwright/test");

test("Handling Frame in Playwright", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // find total number of frames
  const allFrames = page.frames();
  console.log("Total Frames: " + allFrames.length);

  // Approach 1: By using frame name or url and frame object
  // const frame = await page.frame("name");
  const frame = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame.fill("[name='mytext1']", "Hello");

  await page.waitForTimeout(5000);

  // Approach 2: Using frame locator
  const frameLocator = await page.frameLocator("frame[src='frame_1.html']");

  await frameLocator.locator("[name='mytext1']").fill("Hello Again");

  await page.waitForTimeout(5000);
});
