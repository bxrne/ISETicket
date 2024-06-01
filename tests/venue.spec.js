import { test, expect } from "@playwright/test";

test("Ticket distribution results", async ({ page }) => {
	await page.goto("http://127.0.0.1:5500"); // If you are using a different port, change it here
	await page.click("a[href='/venue.html']"); // Click on the link to the venue page

	const initialSupply = await page.inputValue("#initialSupply");
	console.log(initialSupply);
	expect(Number.isInteger(parseFloat(initialSupply))).toBe(true);

	const currentSupply = await page.inputValue("#currentSupply");
	expect(Number.isInteger(parseFloat(currentSupply))).toBe(true);
});
