import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/waveia/i);
  });

  test('should have hero section', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('h1').first();
    await expect(hero).toBeVisible();
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation').first();
    await expect(nav).toBeVisible();
  });

  test('should have CTA button', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: /contact/i }).first();
    await expect(cta).toBeVisible();
  });

  test('should have footer', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
