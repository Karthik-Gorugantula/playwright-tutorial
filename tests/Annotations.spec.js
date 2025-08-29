const { expect, test } = require("@playwright/test");

/* // only demo

test.only("test 1", async ({ page }) => {
  console.log("this is my test1...");
});

test("test 2", async ({ page }) => {
  console.log("this is my test2...");
});

test.only("test 3", async ({ page }) => {
  console.log("this is my test3...");
});

test("test 4", async ({ page }) => {
  console.log("this is my test4...");
});

test("test 5", async ({ page }) => {
  console.log("this is my test5...");
});

*/

/* // skip demo

test("test 1", async ({ page }) => {
  console.log("this is my test1...");
});

test("test 2", async ({ page }) => {
  console.log("this is my test2...");
});

test.skip("test 3", async ({ page }) => {
  console.log("this is my test3...");
});

test.skip("test 4", async ({ page }) => {
  console.log("this is my test4...");
});

test("test 5", async ({ page }) => {
  console.log("this is my test5...");
});

*/

/* // skip tests on the basis of certain conditions demo

test("test 1", async ({ page }) => {
  console.log("this is my test1...");
});

test("test 2", async ({ page }) => {
  console.log("this is my test2...");
});

test.skip("test 3", async ({ page }) => {
  console.log("this is my test3...");
});

test.skip("test 4", async ({ page }) => {
  console.log("this is my test4...");
});

test("test 5", async ({ page, browserName }) => {
  // we will be using browserName fixture here
  if (browserName === "chromium") test.skip();
  console.log("this is my test5...");
});

*/

/* // fixme annotation demo

test("test 1", async ({ page }) => {
  console.log("this is my test1...");
});

test("test 2", async ({ page }) => {
  console.log("this is my test2...");
});

test("test 3", async ({ page }) => {
  test.fixme();
  console.log("this is my test3...");
});

test("test 4", async ({ page }) => {
  console.log("this is my test4...");
});

*/

/* // fail annotation demo

test("test 1", async ({ page }) => {
  console.log("this is my test1...");
});

test("test 2", async ({ page }) => {
  console.log("this is my test2...");
});

test("test 3", async ({ page }) => {
  test.fail(); // expecting the test to fail
  console.log("this is my test3...");
  expect(1).toBe(1); // but this assertion is true
});

test("test 4", async ({ page }) => {
  test.fail(); // expecting the test to fail
  console.log("this is my test3...");
  expect(1).toBe(1); // but this assertion is true
});

test("test 5", async ({ page, browserName }) => {
  console.log("this is my test4...");
  if (browserName === "firefox") test.fail();
});

*/

// slow annotation demo -> make default timeout as 0.5s before executing this block of code.

test("test 7", async ({ page }) => {
  test.slow();
  // test.setTimeout(5000);
  console.log("this is test 7...");
  await page.goto("https://demoblaze.com/index.html");
});
