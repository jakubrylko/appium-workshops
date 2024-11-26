import BaseClass from '../../BaseClass'

export class HomeSelectors extends BaseClass {
  get wikipediaLogo() {
    return this.getSelector(
      'org.wikipedia.alpha:id/main_toolbar',
      '**/XCUIElementTypeButton[`name == "wikipedia"`]'
    )
  }
}
