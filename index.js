import puppeteer from "puppeteer";
import path from "path";

const main = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com"); // Tambahkan "https://" pada URL // Hapus tanda "./" pada path
  await page.screenshot({ path: "example.jpg" });
  await browser.close();
};

main();
