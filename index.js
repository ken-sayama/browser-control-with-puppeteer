require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.URL);
  
  // insert your email address
  await page.type("#account_email", process.env.EMAIL);
  await page.screenshot({path: 'email.png'});
  page.click('button[type="submit"]');
  await page.waitForNavigation();

  // insert your password
  await page.type("#account_password", process.env.PASSWORD)
  await page.screenshot({path: 'password.png'});
  page.click('button[type="submit"]');
  await page.waitForNavigation();

  await page.screenshot({path: 'shopify-screen.png'});

  await browser.close();
})();