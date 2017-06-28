import { HellowWorldPage } from './app.po';

describe('hellow-world App', () => {
  let page: HellowWorldPage;

  beforeEach(() => {
    page = new HellowWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
