import BaseClass from '../baseClass'

export class LoginSelectors extends BaseClass {
  get emailInput() {
    return driver.isAndroid
      ? $('android=new UiSelector().text("Email")')
      : $(
          '-ios class chain:**/XCUIElementTypeTextField[`name == "input-email"`]'
        )
  }
}
