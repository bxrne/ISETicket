import { test, expect } from "@playwright/test";
import FileSystem from "fs";

const attendeeWallet = FileSystem.readFileSync(
	"../wallets/attendee.json",
	"utf8"
);

test("Creating a wallet", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/attendees.html']"); // Click on the link to the attendees page

	await page.fill("#CW_walletPassword", "securepassword"); // Fill in the password field
	await page.click("#CW_button"); // Click on the create wallet button

	const walletAddress = await page.inputValue("#CW_walletAddress"); // Get the wallet address from read-only input field
	expect(walletAddress).toMatch(/^0x[a-fA-F0-9]{40}$/); // Check if the wallet address is in the correct format

	const walletPrivateKey = await page.inputValue("#CW_walletPrivateKey"); // Get the wallet private key
	expect(walletPrivateKey).toMatch(/^0x[a-fA-F0-9]{64}$/); // Check if the wallet private key is in the correct format

	const keystore = await page.inputValue("#CW_walletKeystore"); // Get the keystore
	expect(keystore).toMatch(
		// Check if the keystore is in the correct format
		/^\{"address":"0x[a-fA-F0-9]{40}","privateKey":"0x[a-fA-F0-9]{64}"\}$/
	);
});

test("Checking wallet balance", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/attendees.html']"); // Click on the link to the attendees page

	await page.fill("#CB_walletAddress", JSON.parse(attendeeWallet).address); // Fill in the wallet address
	await page.click("#CB_btn"); // Click on the check balance button

	// wait 5 seconds for web3 operation to complete
	await page.waitForTimeout(5000);

	const sethBalance = await page.inputValue("#CB_sethResult"); // Get the SETH balance
	expect(parseFloat(sethBalance)).toBeGreaterThan(0);

	const ticketBalance = await page.inputValue("#CB_ticketResult"); // Get the ticket balance
	expect(Number.isInteger(parseFloat(ticketBalance))).toBe(true); // Check if the ticket balance is an integer
});
