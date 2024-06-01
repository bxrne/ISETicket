import { test, expect } from "@playwright/test";
import FileSystem from "fs";

const attendeeWallet = FileSystem.readFileSync(
	"../wallets/attendee.json",
	"utf8"
);

test("Return token with keystore wallet", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/attendees.html']"); // Click on the link to the attendees page

	await page.setInputFiles("#TK_walletKeystore", "../wallets/attendee.json"); // Upload attendee's wallet
	await page.click("#TK_returnBtn");

	// check success dialog
	const dialog = await page.waitForEvent("dialog");
	expect(dialog.type()).toBe("alert");
	expect(dialog.message()).toBe("Ticket returned successfully");
});

test("Return token with manual entry wallet", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/attendees.html']"); // Click on the link to the attendees page

	await page.click("#TK_enterWalletDetails"); // open input fields
	await page.fill(
		"#TK_walletDetailsAddress",
		JSON.parse(attendeeWallet).address
	);
	await page.fill(
		"#TK_walletDetailsPrivateKey",
		JSON.parse(attendeeWallet).privateKey
	);
	await page.click("#TK_returnBtn");

	// check success dialog
	const dialog = await page.waitForEvent("dialog");
	expect(dialog.type()).toBe("alert");
	expect(dialog.message()).toBe("Ticket returned successfully");
});
