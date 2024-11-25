import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.shared.conf'

export const config: Options.Testrunner = {
  ...baseConfig,
  user: 'jakubryko_mLdvjc',
  key: 'gpiQidgPqK2DCqPdHNqJ',
  services: [
    [
      'browserstack',
      {
        app: 'apps/wikipedia.apk',
        buildIdentifier: '#${DATE_TIME}'
      }
    ]
  ],
  capabilities: [
    {
      platformName: 'android',
      'appium:platformVersion': '12.0',
      'appium:deviceName': 'Samsung Galaxy S22 Ultra',
      'bstack:options': {
        buildName: 'Wikipedia -',
        debug: true,
        networkLogs: true,
        projectName: 'Onboarding'
      }
    }
  ]
}
