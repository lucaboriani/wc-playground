import { test, expect } from '@playwright/test';

const {describe, beforeEach } = test

describe('metaframeworks', ()=>{
  beforeEach(async ({ page })=>{
    await page.goto("http://localhost:3000/testing");
  
  })
  test('meta is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Testing');
  });
  
  test('correct title is shown', async ({ page }) => {
    await expect( page.getByText('Why Should I care ?')).toBeVisible();
  });
  
})



