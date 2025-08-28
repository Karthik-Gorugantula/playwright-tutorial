import { test, expect } from "@playwright/test";

test.beforeAll(async ({}) => {
  console.log("this is beforeAll hook.....", () => {});
});

test.afterAll(async ({}) => {
  console.log("this is after all hook.....", () => {});
});

test.beforeEach(async () => {
  console.log("this is beforeEach hook.....");
});

test.afterEach(async () => {
  console.log("this is afterEach hook.....");
});

test.describe.only("group 1", () => {
  test("test 1", async ({ page }) => {
    console.log("This is test 1");
  });

  test("test 2", async ({ page }) => {
    console.log("This is test 2");
  });
});

test.describe("Group 2", () => {
  test("test 3", async ({ page }) => {
    console.log("This is test 3");
  });

  test("test 4", async ({ page }) => {
    console.log("This is test 4");
  });
});
