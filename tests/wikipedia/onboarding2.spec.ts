import { HomeAssertion } from '../../screens/Wikipedia/Homepage/Home.assertion'
import { OnboardingBaseClass } from '../../screens/Wikipedia/Onboarding/Onboarding.base'

describe('Onboarding', () => {
  const OnboardingBase = new OnboardingBaseClass()
  const Home = new HomeAssertion()

  it('Should display Wikipedia logo', async () => {
    await OnboardingBase.completeOnboarding()
    await Home.assertLogo()
  })
})
