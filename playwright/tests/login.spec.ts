import { test, expect } from "@playwright/test";

const LoginLocators = {
  userNameInput: "input#username",
  passwordInput: "input#password",
  continueButton: "button[value=default]",
};

test("login", async ({ page }) => {
  await page.goto("https://dev.fusefinance.com");

  const welcomeTitle = page.locator("h1", { hasText: "Welcome" });
  await welcomeTitle.waitFor({ state: "visible" });

  const userNameInput = page.locator(LoginLocators.userNameInput);
  const passwordInput = page.locator(LoginLocators.passwordInput);
  const continueButton = page.locator(LoginLocators.continueButton);

  await userNameInput.fill(process.env.USERNAME ?? "");
  await passwordInput.fill(process.env.PASSWORD ?? "");
  await continueButton.click();

  const logoutButton = page.locator("span", { hasText: "Logout" });
  await logoutButton.waitFor({ state: "visible" });
});
