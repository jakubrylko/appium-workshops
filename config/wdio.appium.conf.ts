import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.shared.conf'

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      'appium:noReset': false
    }
  ],
  services: [['appium', { command: 'appium' }]],
  port: 4723
}
