import Lang from 'lang.js';

const plugin = {
  install(Vue, options) {
    // Default options
    const Locale = options.locale || 'en';
    const fallbackLocale = options.fallback || 'en';
    const messages = options.messages || {};

    const lang = new Lang({
      messages: messages,
      locale: Locale,
      fallback: fallbackLocale
    });

    const translate = (key, options) => {
      return lang.trans(key, options);
    };

    const pluralTranslate = (key, plural, options) => {
      return lang.choice(key, plural, options);
    };

    const hasTranslation = (key) => {
      return lang.has(key);
    };

    const ifTranslation = (key, objectKey) => {
      if (hasTranslation(key)) {
        return translate(key);
      }
      return objectKey;
    };

    // Language object
    Vue.prototype.$lang = Vue.lang = lang;

    // Get
    Vue.prototype.$trans = translate;
    Vue.prototype.$t = translate;

    Vue.prototype.$choice = pluralTranslate;
    Vue.prototype.$tc = pluralTranslate;

    Vue.prototype.$has = hasTranslation;
    
    Vue.prototype.$ifTrans = ifTranslation;
    Vue.prototype.$it = ifTranslation;

    Vue.mixin({
      beforeCreate() {
        // Vue.util.defineReactive(this, '_lang', lang);
        Vue.util.defineReactive(this, '$lang', lang);
      }
    });
  }
};

export default plugin;
