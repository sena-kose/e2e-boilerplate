import { loginPage } from 'src/pages/login';
import { expect } from 'chai';
import { LoginConst } from 'src/consts/login.const';
import { dashboardConst } from 'src/consts/dashboard.const';
import { assert } from 'console';
import { eventConst } from 'src/consts/event.const';

describe('[Event Manager] Dashboard Module', () => {
  it('Test Case 1 - User should view dashboard if authenticated', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    await browser.url('https://e2e-assessment.piton.com.tr/dashboard');
    let  dashboardTittle = await browser.$('.mat-card-title > span').getText();
    expect(dashboardTittle).to.be.eq(dashboardConst.dashboardTittle);
  });
  it('Test Case 2 – User should redirect to login page if not authenticated', async () => {
    await browser.reloadSession();
    await browser.url('https://e2e-assessment.piton.com.tr/dashboard');
    const isUserNameFieldExist = await browser.$('#username').isExisting();
    expect(isUserNameFieldExist).equal(true);
    const isPasswordFieldExist = await browser.$('#password').isExisting();
    expect(isPasswordFieldExist).equal(true);
    const isLoginBttonIsExist = await browser.$('.mat-flat-button').isExisting();
    expect(isLoginBttonIsExist).equal(true);
  });
  it('Test Case 3 – User should view list of events if any event created otherwise user should view notification message states no registered event found  ', () => {
 
  });

  it('Test Case 4 - User should be able navigate edit event when click the edit event button', async () => {  
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
    await eventNameFeild.addValue(dashboardConst.titleTest);
    const button3 = await browser.$('.mat-button-wrapper');
    await button3.click();
    await browser.$('.mat-calendar-body-today').click();
    const deleteButton = await browser.$('.mat-icon');
    await deleteButton.click();
    await browser.$('.mat-primary > .mat-button-wrapper').click();
    await browser.$ ('.mat-primary .mat-icon').click();
    const eventNameFeildCompare = await browser.$('#name').addValue('1234');
    expect(eventNameFeildCompare).to.be.not.eq(dashboardConst.titleTest);
  });
  it('Test Case 5 – User should be able to delete event when click the delete button', async () => {
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

    await browser.$ ('.mat-accent .mat-icon').click();
    await browser.$ ('.mat-accent .mat-icon').click();
    let emptyText = await browser.$ ('.mat-card-content').getText();
    expect(emptyText).to.be.eq(dashboardConst.deleteCreate);

  });
  it('Test Case 6 – User should be able to view event participants ', async () => {
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
    await browser.$('.mat-warn .mat-icon').click();
    const isTableFieldExist = await browser.$('.cdk-overlay-pane').isExisting();
    expect(isTableFieldExist).equal(true);
  });


});