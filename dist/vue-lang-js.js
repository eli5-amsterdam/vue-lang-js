/*!
 * vue-lang-js v1.3.1 
 * (c) 2018 undefined
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lang.js')) :
  typeof define === 'function' && define.amd ? define(['lang.js'], factory) :
  (global.VueLangJs = factory(global.Lang));
}(this, (function (Lang) { 'use strict';

Lang = 'default' in Lang ? Lang['default'] : Lang;

var plugin = {
  install: function install(Vue, options) {
    // Default options
    var Locale = options.locale || 'en';
    var fallbackLocale = options.fallback || 'en';
    var messages = options.messages || {};

    var lang = new Lang({
      messages: messages,
      locale: Locale,
      fallback: fallbackLocale
    });

    var translate = function (key, options) {
      return lang.trans(key, options);
    };

    var pluralTranslate = function (key, plural, options) {
      return lang.choice(key, plural, options);
    };

    var hasTranslation = function (key) {
      return lang.has(key);
    };

    var ifTranslation = function (key, objectKey) {
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
      beforeCreate: function beforeCreate() {
        // Vue.util.defineReactive(this, '_lang', lang);
        Vue.util.defineReactive(this, '$lang', lang);
      }
    });
  }
};

return plugin;

})));
