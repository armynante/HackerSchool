const puppeteer = require('puppeteer');

(async () => {
    // Launch a headless browser
    const browser = await puppeteer.launch();

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto('https://tiffycooks.com/');

    // Wait for the page to fully load (adjust the wait time as needed)
    await page.waitForTimeout(3000);

    // Get the full content of the page
    const pageContent = await page.content();

    // Output or process the content as needed
    console.log(pageContent);

    // Close the browser
    await browser.close();
})();
