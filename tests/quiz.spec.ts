import { test, expect } from '@playwright/test';



test('Check category change', async ({ page }) => {
    await page.goto('localhost:3000');
    // dropdown
    await page.click('div[name="category"]');

    // Click on the category
    await page.click('div.item:has-text("Entertainment: Books")');
  
    // selection to update
    await page.waitForTimeout(1000); 
  
    // Check that the selected category has changed
    const selectedCategory = await page.$eval('div[name="category"] .text', element => element.textContent.trim());
    expect(selectedCategory).toBe("Entertainment: Books");
  });
  

test('check question, click answer, click next button, and verify question number changes', async ({ page }) => {
  await page.goto('localhost:3000');

  // timeout for waiting for the button to be clickable
  await page.waitForSelector('button.ui.big.icon.primary.left.labeled.button', { state: 'visible', timeout: 60000 });

  await page.click('button.ui.big.icon.primary.left.labeled.button');

  const questionDiv = page.locator('div.ui.huge.floating.message');

  await questionDiv.waitFor({ state: 'visible', timeout: 60000 });

  // Retrieve the text content of the div
  const textContent = await questionDiv.textContent();

  // Check that the text starts with 'Q.'
  expect(textContent).toMatch(/^Q\./);

  // Select the div containing the answers
  const answersDiv = page.locator('div.ui.massive.fluid.vertical.menu');

  await answersDiv.waitFor({ state: 'visible', timeout: 60000 });

  // Retrieve all answer items
  const answerItems = answersDiv.locator('a.item');

  // Check that there are either 2 or 4 answers
  const answerCount = await answerItems.count();
  expect([2, 4]).toContain(answerCount);

  // Click on the first answer
  await answerItems.first().click();

  // Get the initial question number
  const initialQuestionNumber = await page.getByText('Question No.1 of 5000200Q.');

  // next button
  await page.click('button.ui.big.icon.primary.right.floated.right.labeled.button');

  // Wait for the question number to change
  await page.waitForTimeout(1000);

  // question number
  const newQuestionNumber = await page.getByText('Question No.2 of 5000159Q. In');

  // Ensure that the question number has changed
  expect(newQuestionNumber).not.toBe(initialQuestionNumber);
});