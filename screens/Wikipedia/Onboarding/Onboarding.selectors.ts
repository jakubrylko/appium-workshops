import BaseClass from '../../BaseClass'

export class OnboardingSelectors extends BaseClass {
  get continueBtn() {
    return this.getSelector(
      '',
      'org.wikipedia.alpha:id/fragment_onboarding_forward_button'
    )
  }

  get getStartedBtn() {
    return this.getSelector(
      '',
      'org.wikipedia.alpha:id/fragment_onboarding_done_button'
    )
  }
}
