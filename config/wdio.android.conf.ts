import type { Options, Capabilities } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

const baseCapabilities =
  baseConfig.capabilities as Capabilities.RemoteCapabilities[]

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel_XL_API_31',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': './apps/wdio-android.apk',
      ...baseCapabilities[0]
    }
  ]
}
