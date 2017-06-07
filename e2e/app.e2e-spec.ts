import { CuboPage } from './app.po';

describe('cubo App', () => {
  let page: CuboPage;

  beforeEach(() => {
    page = new CuboPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
