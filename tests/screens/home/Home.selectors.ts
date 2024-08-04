import BaseClass from '../baseClass'

export class HomeSelectors extends BaseClass {
  get LoginBtn() {
    return driver.isAndroid
      ? $('android=')
      : $('-ios class chain:**/XCUIElementTypeButton[`name == "Login"`]')
  }
}
