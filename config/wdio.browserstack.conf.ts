import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.shared.conf'
import 'dotenv/config'

const { APP_ID, BROWSERSTACK_ACCESS_KEY, BROWSERSTACK_USERNAME, CI, PLATFORM } =
  process.env

const isAndroid = () => PLATFORM === 'android'

export const config: Options.Testrunner = {
  ...baseConfig,
  user: BROWSERSTACK_USERNAME,
  key: BROWSERSTACK_ACCESS_KEY,
  services: [
    [
      'browserstack',
      {
        app: CI
          ? { id: APP_ID }
          : { path: isAndroid() ? 'apps/wikipedia.apk' : 'apps/wikipedia.ipa' },
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
