import { LoginScreen } from './Login.screen'

export class LoginAssertion extends LoginScreen {
  async assertScreen() {
    await expect(this.emailInput).toBeDisplayed()
  }
}
