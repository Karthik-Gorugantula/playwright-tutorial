exports.CartPage = class CartPage {
  constructor(page) {
    // all the locators and attributes will be written here
    this.page = page;
    this.productList = "//tbody[@id='tbodyid']/tr/td[2]";
  }
  // all the actions that can be performed on this page can be written here
  async checkProductInCart(productName) {
    const productInCart = await this.page.$$(this.productList);
    for (const product of productInCart) {
      console.log(await product.textContent());
      if (productName === (await product.textContent())) {
        return true;
      }
    }
  }
};
