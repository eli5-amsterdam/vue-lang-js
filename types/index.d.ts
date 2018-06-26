// Type definitions for @eli5/vue-lang-js 1.1.0
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import Vue, { PluginFunction } from 'vue';

declare namespace VueLang {
  type Path = string;
  type Locale = string;
  type Values = any[] | { [key: string]: any };
  type Choice = number;
  type LocaleMessage = string | LocaleMessageObject | LocaleMessageArray;
  interface LocaleMessageObject { [key: string]: LocaleMessage; }
  interface LocaleMessageArray { [index: number]: LocaleMessage; }
  interface LocaleMessages { [key: string]: LocaleMessageObject; }
  type TranslateResult = string | LocaleMessages;

  interface LangOptions {
    locale?: Locale;
    fallbackLocale?: Locale;
    messages?: LocaleMessages;
  }
}

export type Path = VueLang.Path;
export type Locale = VueLang.Locale;
export type Choice = VueLang.Choice;
export type LocaleMessage = VueLang.LocaleMessage;
export type LocaleMessageObject = VueLang.LocaleMessageObject;
export type LocaleMessageArray = VueLang.LocaleMessageArray;
export type LocaleMessages = VueLang.LocaleMessages;

export declare interface IVueLang {
  readonly messages: VueLang.LocaleMessages;

  locale: VueLang.Locale;
  fallbackLocale: VueLang.Locale;
}

declare class VueLang {
  constructor(options?: VueLang.LangOptions)
  readonly messages: VueLang.LocaleMessages;
  locale: VueLang.Locale;
  fallbackLocale: VueLang.Locale;

  t(key: VueLang.Path, values?: VueLang.Values): VueLang.TranslateResult;
  tc(key: VueLang.Path, choice?: VueLang.Choice, values?: VueLang.Values): string;
  has(key: VueLang.Path): boolean;
  it(key: VueLang.Path, fallback?: VueLang.Path): string;

  static install: PluginFunction<never>;
}



declare module 'vue/types/vue' {
  interface Vue {
    readonly $lang: VueLang;
    $t: typeof VueLang.prototype.t;
    $trans: typeof VueLang.prototype.t;
    $choice: typeof VueLang.prototype.tc;
    $tc: typeof VueLang.prototype.tc;
    $has: typeof VueLang.prototype.has;
    $it: typeof VueLang.prototype.it;
    $ifTrans: typeof VueLang.prototype.it;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    lang?: {
      messages?: VueLang.LocaleMessages;
    };
  }
}

export default VueLang;