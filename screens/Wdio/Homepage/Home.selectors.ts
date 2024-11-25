import BaseClass from '../../BaseClass'

export class HomeSelectors extends BaseClass {
  get loginBtn() {
    return driver.isAndroid
      ? $('android=new UiSelector().description("Login")')
      : $('-ios class chain:**/XCUIElementTypeButton[`name == "Login"`]')
  }
}
