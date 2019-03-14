const puppeteer = require('puppeteer');
const email = 'hoge@flagship.cc' // your email
const password = '0000000' // your password

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://partners.shopify.com/124860');
  
  // insert your email address
  await page.type("#account_email", "sayama@flagship.cc");
  await page.screenshot({path: 'email.png'});
  page.click('button[type="submit"]');
  await page.waitForNavigation();

  // insert your password
  await page.type("#account_password", "74135841")
  await page.screenshot({path: 'password.png'});
  page.click('button[type="submit"]');
  await page.waitForNavigation();

  await browser.close();
})();

