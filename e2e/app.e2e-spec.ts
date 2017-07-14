import { BandForgePage } from './app.po';

describe('band-forge App', () => {
  let page: BandForgePage;

  beforeEach(() => {
    page = new BandForgePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
