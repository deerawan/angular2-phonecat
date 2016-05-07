import { Angular2PhonecatPage } from './app.po';

describe('angular2-phonecat App', function() {
  let page: Angular2PhonecatPage;

  beforeEach(() => {
    page = new Angular2PhonecatPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-phonecat works!');
  });

  xit('should filter the phone list as a user types into the search box', () => {
  });

});
