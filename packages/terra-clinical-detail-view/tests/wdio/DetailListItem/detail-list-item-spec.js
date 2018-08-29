/* global browser, Terra, before */
const formFactor = browser.options.formFactor;
const viewports = formFactor ? [formFactor] : Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');

viewports.forEach((viewport) => {
  describe('Detail List Item', () => {
    before(() => viewports.length > 1 ? browser.setViewportSize(viewport) : null);

    describe('Displays a Detail List Item as expected', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
  });
});
