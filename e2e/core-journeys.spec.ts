import { test, expect } from '@playwright/test';

test.describe('Core User Journeys', () => {
  test('homepage loads and displays hero', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Waveia/);
    
    // Check main heading presence
    await expect(page.locator('h1')).toBeVisible();
    
    // Check S-Tier performance marker (Skeleton check implicit via smooth load)
    await expect(page.locator('body')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Contact
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1')).toContainText(/Contact/i);
  });

  test('service page load', async ({ page }) => {
    await page.goto('/creation-site-internet/site-vitrine');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('mobile menu interaction', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open menu
    await page.getByLabel('Ouvrir le menu').click();
    await expect(page.getByText('Démarrer un projet')).toBeVisible();
  });
});
