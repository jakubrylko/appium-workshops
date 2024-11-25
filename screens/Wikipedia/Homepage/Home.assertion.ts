import { HomeSelectors } from './Home.selectors'

export class HomeAssertion extends HomeSelectors {
  async assertLogo() {
    await expect(this.wikipediaLogo).toBeDisplayed()
  }
}
