import type { Options, Capabilities } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

const baseCapabilities =
  baseConfig.capabilities as Capabilities.RemoteCapabilities[]

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 15',
      'appium:platformVersion': '17.5',
      'appium:automationName': 'XCUITest',
      'appium:app': './apps/wdio-ios.zip',
      ...baseCapabilities[0]
    }
  ]
}
