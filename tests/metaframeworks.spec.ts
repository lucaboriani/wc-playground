import { test, expect } from '@playwright/test';

const {describe, beforeEach } = test

describe('metaframeworks', ()=>{
  beforeEach(async ({ page })=>{
    await page.goto("http://localhost:3000/metaframeworks");
  
  })
  test('meta is correct', async ({ page }) => {
    await expect(page).toHaveTitle('What is a JavaScript Meta-framework?');
  });
  
  test('correct title is shown', async ({ page }) => {
    await expect( page.getByText('What is a JavaScript Meta-framework?')).toBeVisible();
  });
  
})



