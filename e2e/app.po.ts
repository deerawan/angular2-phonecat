export class Angular2PhonecatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-phonecat-app h1')).getText();
  }
}
