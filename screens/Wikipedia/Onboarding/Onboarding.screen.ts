import { OnboardingSelectors } from './Onboarding.selectors'

export class OnboardingScreen extends OnboardingSelectors {
  async continue({ times }: { times: number }) {
    for (let i = 0; i < times; i++) {
      await this.nextBtn.click()
    }
  }

  async finish() {
    await this.getStartedBtn.waitForDisplayed()
    await this.getStartedBtn.click()
  }
}
