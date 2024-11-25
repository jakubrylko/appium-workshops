import BaseClass from '../../BaseClass'
import { OnboardingScreen } from './Onboarding.screen'

export class OnboardingBaseClass extends BaseClass {
  async completeOnboarding() {
    const Onboarding = new OnboardingScreen()
    await Onboarding.continue({ times: 3 })
    await Onboarding.finish()
  }
}
