import type { Options, Capabilities } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

const baseCapabilities =
  baseConfig.capabilities as Capabilities.RemoteCapabilities[]

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel_8_API_35',
      'appium:platformVersion': '15.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': './apps/wikipedia.apk',
      'appium:appPackage': 'org.wikipedia.alpha',
      'appium:appActivity': 'org.wikipedia.DefaultIcon',
      'appium:appWaitActivity': '*',
      'appium:autoGrantPermissions': true,
      ...baseCapabilities[0]
    }
  ]
}
