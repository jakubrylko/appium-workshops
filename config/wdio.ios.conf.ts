import type { Options, Capabilities } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

const baseCapabilities =
  baseConfig.capabilities as Capabilities.RemoteCapabilities[]

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 16',
      'appium:platformVersion': '18.1',
      'appium:automationName': 'XCUITest',
      'appium:app': './apps/wikipedia.zip',
      ...baseCapabilities[0]
    }
  ]
}
