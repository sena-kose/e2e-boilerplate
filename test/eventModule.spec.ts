import { expect } from 'chai';
import { eventConst } from 'src/consts/event.const';

describe('[Event Manager] Event Module', () => {

  it('Test Case 1 - - User should view create event form if click the Create Event button on dashboard ', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();

    const button2 = await browser.$('.mat-button-wrapper');
    await button2.click();
    let isFormExist = await browser.$('.mat-form-field-infix').isExisting();
    expect(isFormExist).equal(true);
  });
  it('Test Case 2 – User should view validation errors if click the Create Event button without fill the event form ', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    const button3 = await browser.$('.mat-button-wrapper');
    await button3.click();
    await browser.$('.mat-primary > .mat-button-wrapper').click();
    expect(await browser.$('#mat-error-2').getText()).to.be.eq(eventConst.error2);
    expect(await browser.$('#mat-error-3').getText()).to.be.eq(eventConst.error3);
    expect(await browser.$('#mat-error-4').getText()).to.be.eq(eventConst.error4);
    expect(await browser.$('#mat-error-5').getText()).to.be.eq(eventConst.error5);
    expect(await browser.$('#mat-error-6').getText()).to.be.eq(eventConst.error6);
  });
  it('Test Case 3 – User should be able to add new participant when click the Add Participant button', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    const button2 = await browser.$('.mat-button-wrapper');
    await button2.click();

    const button3 = await browser.$('.mat-flat-button');
    for (let i = 0; i < 9; i++) {
      await button3.click();
      expect(await browser.$('td:nth-child(1)').isExisting()).equal(true);
    }
  });
it('Test Case 4 – User should view error message if removes all participants', async () => {
  await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    const button2 = await browser.$('.mat-button-wrapper');
    await button2.click();
    const deleteButton = await browser.$('.mat-icon');
    await deleteButton.click();
    let participant = await browser.$('.ng-star-inserted:nth-child(5)').getText();
    expect(participant).to.be.eq(eventConst.participant);

  });
it('Test Case 5 – User should be able to create new event if fills all required fields and redirect to dashboard page with create successful message', async () => {
  await browser.url('https://e2e-assessment.piton.com.tr/login');
  const userNameField = await browser.$('#username');
  const passwordField = await browser.$('#password');
  await userNameField.addValue('automationtest');
  await passwordField.addValue('123456789');
  const button = await browser.$('.mat-flat-button');
  await button.click();
  const button2 = await browser.$('.mat-button-wrapper');
  await button2.click();
  const eventNameFeild = await browser.$('#name');
  await eventNameFeild.addValue('dogum gunu');
  const eventDecription = await browser.$('#description');
  await eventDecription.addValue('senanın dogum gunu');
  const button3 = await browser.$('.mat-button-wrapper');
  await button3.click();
  await browser.$('.mat-calendar-body-today').click();
  const deleteButton = await browser.$('.mat-icon');
  await deleteButton.click();
  expect (await browser.getUrl()).to.be.eq(eventConst.dashboardURL);
});
it('Test Case 6 – User should be able to edit event. When user click the edit button all event fields must be filled according to editing event', async () => {
await browser.url('https://e2e-assessment.piton.com.tr/login');
const userNameField = await browser.$('#username');
const passwordField = await browser.$('#password');
await userNameField.addValue('automationtest');
await passwordField.addValue('123456789');
const button = await browser.$('.mat-flat-button');
await button.click();
const button2 = await browser.$('.mat-button-wrapper');
await button2.click();
const eventNameFeild = await browser.$('#name');
await eventNameFeild.addValue('dogum gunu');
const button3 = await browser.$('.mat-button-wrapper');
await button3.click();
await browser.$('.mat-calendar-body-today').click();
const deleteButton = await browser.$('.mat-icon');
await deleteButton.click();
await browser.$('.mat-primary > .mat-button-wrapper').click();


});
it('Test Case 7 – User should be able to update event if required fields filled and redirect to dashboard page with update successful message ', async () => {
  await browser.url('https://e2e-assessment.piton.com.tr/login');
  const userNameField = await browser.$('#username');
  const passwordField = await browser.$('#password');
  await userNameField.addValue('automationtest');
  await passwordField.addValue('123456789');
  const button = await browser.$('.mat-flat-button');
  await button.click();
  const button2 = await browser.$('.mat-button-wrapper');
  await button2.click();
  const eventNameFeild = await browser.$('#name');
  await eventNameFeild.addValue('dogum gunu');
  const button3 = await browser.$('.mat-button-wrapper');
  await button3.click();
  await browser.$('.mat-calendar-body-today').click();
  const deleteButton = await browser.$('.mat-icon');
  await deleteButton.click();
  await browser.$('.mat-primary > .mat-button-wrapper').click();
  await browser.$ ('.mat-primary .mat-icon').click();
  const eventDecription = await browser.$('#description');
  await eventDecription.addValue('senanın dogum gunu');
  await browser.$ ('.mat-primary > .mat-button-wrapper').click();

  
});
});
