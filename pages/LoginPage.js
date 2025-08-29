exports.LoginPage = class LoginPage {
  constructor(page) {
    // all the locators and attributes will be written here
    this.page = page;
    this.loginLink = "#login2";
    this.userInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtton = "//button[normalize-space()='Log in']";
  }

  // all the actions that can be performed on this page can be written here
  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButtton).click();
  }
};
