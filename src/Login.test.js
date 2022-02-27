// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");
const faker = require("faker");

const person = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Contact Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      args: ["--window-size=1920,1080"],
    });
    page = await browser.newPage();
  });

  it("should submit the form", async () => {
    await page.goto("http://localhost:3000/login", {
      waitUntil: "networkidle0",
      timeout: 9000000,
    });
    const result = await page.waitForSelector(".contact-form");
    await page.click(".form-control[name=email]");
    await page.type(".form-control[name=email]", person.email);

    await page.click(".form-control[name=password]");
    await page.type(".form-control[name=password]", person.password);
    await page.click(".btn[type=submit]");

    await browser.close();
  }, 9000000);

  //   afterAll(async () => {
  //     await browser.close();
  //   }, 9000000);
});
