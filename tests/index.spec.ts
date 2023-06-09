import { test, expect } from '@playwright/test';

const {describe, beforeEach } = test

describe('the home page', ()=>{
  beforeEach(async ({ page })=>{
    await page.goto("http://localhost:3000/");
  
  })
  test('meta is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Welcome to The playground');
  });
  
  test('correct title is shown', async ({ page }) => {
    await expect( page.getByText(' Frankenstein Experiment')).toBeVisible();
  });
  
  
   /*test('clicking buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: '-' })).toBeVisible();
    await expect(page.getByRole('button', { name: '+' })).toBeVisible();
    
    await page.getByRole('button', { name: '+' }).click()
    await page.getByRole('button', { name: '+' }).click()
    await page.getByRole('button', { name: '+' }).click()
    await page.getByRole('button', { name: '+' }).click()
    await expect(page.getByText('4')).toBeVisible()
    await page.getByRole('button', { name: '-' }).click()
    await page.getByRole('button', { name: '-' }).click()
    await page.getByRole('button', { name: '-' }).click()
    await page.getByRole('button', { name: '-' }).click()
    await page.getByRole('button', { name: '-' }).click()
    await expect(page.getByText('-1')).toBeVisible()
    
  });
  test('normal and styled', async ({ page }) => {
    await  expect(page.getByText('a normal button (browser default styles)')).toBeVisible();
    await  expect(page.getByText('hello')).toBeVisible();
    await  expect(page.getByText('A styled but useless Custom button :(')).toBeVisible();
    await expect(page.getByText('a styled button')).toBeVisible();
  }); */
})



