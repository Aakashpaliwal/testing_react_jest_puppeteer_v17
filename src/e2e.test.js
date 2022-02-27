import puppeteer from "puppeteer";
const faker = require("faker");

const person = {
  name: faker.name.firstName() + " " + faker.name.lastName(),
};

// describe("App.js", () => {
//   let browser;
//   let page;

//   beforeEach(async () => {
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 50,
//       args: ["--window-size=1920,1080"],
//     });
//     page = await browser.newPage();
//   });

//   it("contains the welcome text", async () => {
//     await page.goto("http://localhost:3000", {
//       waitUntil: "networkidle0",
//       timeout: 60000,
//     });
//     await page.waitForSelector(".App-welcome-text");

//     const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
//     console.log("etxt", text);
//     expect(text).toContain("Edit src/App.js and save to reload.");
//   });

//   afterAll(async () => {
//     await browser.close();
//   }, 60000);
// });

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
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0",
      timeout: 9000000,
    });
    await page.waitForSelector(".contact-form");
    await page.click(".input[name=name]");
    await page.click('.input[type="text"]', person.name);
    await page.type(".input[name=name]", person.name);
    await page.click(".button[type=submit]");

    await browser.close();
  }, 9000000);

  //   afterAll(async () => {
  //     await browser.close();
  //   }, 9000000);
});
