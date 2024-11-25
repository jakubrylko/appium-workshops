export default class BaseClass {
  constructor() {}

  getPlatformSelector(selectorIOS: string, selectorAndroid: string) {
    return driver.isAndroid ? selectorAndroid : selectorIOS
  }

  getSelector(
    predicateIOS: string,
    predicateAndroid: string,
    method = 'resourceId'
  ) {
    const selectorIOS = `~${predicateIOS}`
    const selectorAndroid = `android=new UiSelector().${method}("${predicateAndroid}")`
    return $(this.getPlatformSelector(selectorIOS, selectorAndroid))
  }
}
