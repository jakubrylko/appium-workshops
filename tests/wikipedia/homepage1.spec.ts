import { OnboardingBaseClass } from '../../screens/Wikipedia/Onboarding/Onboarding.base'
import { OnboardingScreen } from '../../screens/Wikipedia/Onboarding/Onboarding.screen'

describe('Onboarding', () => {
  const OnboardingBase = new OnboardingBaseClass()
  const Onboarding = new OnboardingScreen()

  it('Should not display "Get started" button', async () => {
    await OnboardingBase.completeOnboarding()
    await expect(Onboarding.getStartedBtn).not.toBeDisplayed()
  })
})
