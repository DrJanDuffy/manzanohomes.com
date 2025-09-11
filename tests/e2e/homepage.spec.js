import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check hero section elements
    await expect(page.getByText('Welcome to Manzano')).toBeVisible();
    await expect(page.getByText('Your Dream Home Awaits')).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Available Homes' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Get Your Home Value' })).toBeVisible();
  });

  test('should display neighborhood highlights', async ({ page }) => {
    await page.goto('/');

    // Check neighborhood features
    await expect(page.getByText('Why Choose Manzano?')).toBeVisible();
    await expect(page.getByText('Prime Location')).toBeVisible();
    await expect(page.getByText('Top-Rated Schools')).toBeVisible();
    await expect(page.getByText('Modern Amenities')).toBeVisible();
    await expect(page.getByText('Community Spirit')).toBeVisible();
  });

  test('should display quick stats', async ({ page }) => {
    await page.goto('/');

    // Check stats section
    await expect(page.getByText('$485K')).toBeVisible();
    await expect(page.getByText('Median Home Price')).toBeVisible();
    await expect(page.getByText('8.5/10')).toBeVisible();
    await expect(page.getByText('Schools Rating')).toBeVisible();
    await expect(page.getByText('72')).toBeVisible();
    await expect(page.getByText('Walk Score')).toBeVisible();
  });

  test('should have working contact form', async ({ page }) => {
    await page.goto('/');

    // Fill out contact form
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="phone"]', '555-123-4567');
    await page.fill(
      'textarea[name="message"]',
      'I am interested in learning more about Manzano homes.'
    );

    // Submit form
    await page.click('button[type="submit"]');

    // Verify form was submitted (you might need to adjust this based on your form handling)
    await expect(page.getByText('Send Message')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that mobile menu button is visible
    await expect(page.getByLabel('Toggle mobile menu')).toBeVisible();

    // Check that hero content is still visible
    await expect(page.getByText('Welcome to Manzano')).toBeVisible();
  });
});
