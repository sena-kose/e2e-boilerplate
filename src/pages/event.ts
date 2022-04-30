export class EventPage {
    open() {
      browser.url('/login');
    }
  
    get title() {
      return $('.event-header');
    }
  }
  
  export const eventPage = new EventPage();