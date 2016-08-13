import { CitybugsPage } from './app.po';

describe('citybugs App', function() {
  let page: CitybugsPage;

  beforeEach(() => {
    page = new CitybugsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
