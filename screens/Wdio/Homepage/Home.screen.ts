import { HomeSelectors } from './Home.selectors'

export class HomeScreen extends HomeSelectors {
  async openLoginScreen() {
    await this.loginBtn.click()
  }
}
