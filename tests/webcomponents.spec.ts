import { test, expect } from '@playwright/test';

const {describe, beforeEach } = test

describe('web components', ()=>{
  beforeEach(async ({ page })=>{
    await page.goto("http://localhost:3000/web-components");
  
  })
  test('meta is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Web Components');
  });
  
  test('correct title is shown', async ({ page }) => {

    await expect( page.getByRole('heading', {name:'Web Components'})).toBeVisible();
  });
  
  
   test('clicking buttons', async ({ page }) => {
    
    await expect(page.getByRole('complementary').getByRole('button', { name: '-' })).toBeVisible();
    await expect(page.getByRole('complementary').getByRole('button', { name: '+' })).toBeVisible();
    
    await page.getByRole('complementary').getByRole('button', { name: '+' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '+' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '+' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '+' }).click()
    await expect(page.getByText('4', { exact: true })).toBeVisible()
    await page.getByRole('complementary').getByRole('button', { name: '-' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '-' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '-' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '-' }).click()
    await page.getByRole('complementary').getByRole('button', { name: '-' }).click()
    await expect(page.getByText('-1', { exact: true })).toBeVisible()
    
  });
  test('normal and styled', async ({ page }) => {
    await  expect(page.getByText('shadow dom & encapsulation')).toBeVisible();
    await  expect(page.getByText('hello')).toBeVisible();
    await  expect(page.getByText('A styled but useless Custom button :(')).toBeVisible();
    await expect(page.getByText('a styled button')).toBeVisible();
  });
})



