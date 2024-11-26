import BaseClass from '../../BaseClass'

export class OnboardingSelectors extends BaseClass {
  get nextBtn() {
    return this.getSelector(
      'org.wikipedia.alpha:id/fragment_onboarding_forward_button',
      '**/XCUIElementTypeButton[`name == "Next"`]'
    )
  }

  get getStartedBtn() {
    return this.getSelector(
      'org.wikipedia.alpha:id/fragment_onboarding_done_button',
      '**/XCUIElementTypeButton[`name == "Get started"`]'
    )
  }
}
