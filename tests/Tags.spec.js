const { expect, test } = require("@playwright/test");

test("test 1@sanity", async ({ page }) => {
  console.log("this is my test1...");
});

test("@sanitytest 2", async ({ page }) => {
  console.log("this is my test2...");
});

test("test 3@reg", async ({ page }) => {
  console.log("this is my test3...");
});

test("test 4@reg", async ({ page }) => {
  console.log("this is my test4...");
});

test("test 5@reg@sanity", async ({ page }) => {
  console.log("this is my test5...");
});
