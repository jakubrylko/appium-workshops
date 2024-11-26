export default class BaseClass {
  constructor() {}

  getPlatformSelector(selectorAndroid: string, selectorIOS: string) {
    return driver.isAndroid ? selectorAndroid : selectorIOS
  }

  getSelector(
    predicateAndroid: string,
    predicateIOS: string,
    method = 'resourceId'
  ) {
    const selectorAndroid = `android=new UiSelector().${method}("${predicateAndroid}")`
    const selectorIOS = `-ios class chain:${predicateIOS}`
    return $(this.getPlatformSelector(selectorAndroid, selectorIOS))
  }
}
