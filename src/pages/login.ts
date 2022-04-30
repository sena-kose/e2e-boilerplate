export class LoginPage {
  open() {
    browser.url('/login');
  }

  get title() {
    return $('.login-header');
  }
}

export const loginPage = new LoginPage();