import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to tarifs page', async ({ page }) => {
    await page.goto('/tarifs');
    await expect(page).toHaveURL(/\/tarifs/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to realisations page', async ({ page }) => {
    await page.goto('/realisations');
    await expect(page).toHaveURL(/\/realisations/);
    await expect(page.locator('h1')).toBeVisible();
  });
});
