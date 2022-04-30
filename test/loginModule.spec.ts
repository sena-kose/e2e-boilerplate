import { expect } from 'chai';
import { LoginConst } from 'src/consts/login.const';

describe('[Event Manager] Login Module', () => {

  it('Test Case 1 - User should see login form if not authenticated. Login Form should contain username password and login button', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const isUserNameFieldExist = await browser.$('#username').isExisting();
    expect(isUserNameFieldExist).equal(true);
    const isPasswordFieldExist = await browser.$('#password').isExisting();
    expect(isPasswordFieldExist).equal(true);
    const isLoginBttonIsExist = await browser.$('.mat-flat-button').isExisting();
    expect(isLoginBttonIsExist).equal(true);
  });
  it('Test Case 2 – User should see validation errors if click the login button without fill the login form', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    let error0 = await browser.$('#mat-error-0').getText();
    let error1 = await browser.$('#mat-error-1').getText();
    expect(error0).to.be.eq(LoginConst.error0);
    expect(error1).to.be.eq(LoginConst.error1);
  });
  it('Test Case 3 – User should navigate to the dashboard and see welcome message if authenticate successfully', async () => {
    await browser.url('https://e2e-assessment.piton.com.tr/login');
    const userNameField = await browser.$('#username');
    const passwordField = await browser.$('#password');
    await userNameField.addValue('automationtest');
    await passwordField.addValue('123456789');
    const button = await browser.$('.mat-flat-button');
    await button.click();
    let wellcome = await browser.$('#welcomeUserMessage').getText();
    expect(wellcome).to.be.eq(LoginConst.wellcome);

  });
});
