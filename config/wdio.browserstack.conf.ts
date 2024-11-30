import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.shared.conf'
import 'dotenv/config'

const isAndroid = () => process.env.PLATFORM === 'android'

export const config: Options.Testrunner = {
  ...baseConfig,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
    [
      'browserstack',
      {
        app: isAndroid() ? 'apps/wikipedia.apk' : 'apps/wikipedia.ipa',
        buildIdentifier: '#${DATE_TIME}'
      }
    ]
  ],
  capabilities: [
    isAndroid()
      ? {
          platformName: 'android',
          'appium:platformVersion': '12.0',
          'appium:deviceName': 'Samsung Galaxy S22 Ultra',
          'bstack:options': {
            buildName: 'Wikipedia Android -',
            debug: true,
            networkLogs: true,
            projectName: 'Onboarding Android'
          }
        }
      : {
          platformName: 'ios',
          'appium:platformVersion': '16',
          'appium:deviceName': 'iPhone 15',
          'bstack:options': {
            buildName: 'Wikipedia iOS -',
            debug: true,
            networkLogs: true,
            projectName: 'Onboarding iOS'
          }
        }
  ]
}
