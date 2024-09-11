import BaseClass from '../baseClass'

export class HomeSelectors extends BaseClass {
  get LoginBtn() {
    return driver.isAndroid
      ? $('android=new UiSelector().description("Login")')
      : $('-ios class chain:**/XCUIElementTypeButton[`name == "Login"`]')
  }
}
