import { test, expect } from '@playwright/test';

test.describe('Service Pages', () => {
  test('should load creation-site-internet hub', async ({ page }) => {
    await page.goto('/creation-site-internet');
    await expect(page).toHaveTitle(/site|création|web/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('should load referencement-seo hub', async ({ page }) => {
    await page.goto('/referencement-seo');
    await expect(page).toHaveTitle(/SEO|Référencement/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('should load agence-communication hub', async ({ page }) => {
    await page.goto('/agence-communication');
    await expect(page).toHaveTitle(/Communication|Agence/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('should load solutions hub', async ({ page }) => {
    await page.goto('/solutions');
    await expect(page).toHaveTitle(/Solutions/i);
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});
