import { SrbPage } from './app.po';

describe('srb App', () => {
  let page: SrbPage;

  beforeEach(() => {
    page = new SrbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
