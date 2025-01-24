export enum LOCALE {
  EN_US = 'en',
  ZH_TW = 'tw'
}

export const i18n = {
  locales: [
    { code: LOCALE.EN_US, language: 'en-US', file: 'en-US.json' },
    { code: LOCALE.ZH_TW, language: 'zh-TW', file: 'zh-TW.json' }
  ],
  defaultLocale: LOCALE.EN_US
}