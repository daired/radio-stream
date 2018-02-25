import { RadioStreamPage } from './app.po';

describe('radio-stream App', () => {
  let page: RadioStreamPage;

  beforeEach(() => {
    page = new RadioStreamPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
