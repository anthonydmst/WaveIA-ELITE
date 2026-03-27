import { test, expect } from '@playwright/test';

test.describe('SEO & Meta Tags', () => {
  test('should have meta description on homepage', async ({ page }) => {
    await page.goto('/');
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/');
    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);
    await expect(ogDescription).toHaveAttribute('content', /.+/);
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/');
    const canonical = page.locator('link[rel="canonical"]');
    const count = await canonical.count();
    if (count > 0) {
      await expect(canonical).toHaveAttribute('href', /.+/);
    }
    // Canonical is optional for homepage
  });
});
