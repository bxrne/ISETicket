import { test, expect } from "@playwright/test";
import FileSystem from "fs";

const attendeeWallet = FileSystem.readFileSync(
	"../wallets/attendee.json",
	"utf8"
);

test("Check wallet for ticket", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/security.html']"); // Click on the link to the venue page

	await page.fill("#walletAddress", JSON.parse(attendeeWallet).address); // Fill in the password field

	const balance = await page.inputValue("#balance");
	expect(Number.isInteger(parseFloat(balance))).toBe(true);
});
