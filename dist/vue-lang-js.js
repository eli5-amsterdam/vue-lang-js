/*!
 * vue-lang-js v1.0.0 
 * (c) 2017 undefined
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

		Object.defineProperty(Vue.prototype, '$lang', {
			get: function() {
				return this.$root._lang;
			}
		});

		Vue.prototype.$trans = function(key, options) {
			return lang.trans(key, options);
		};

		Vue.prototype.$t = function(key, options) {
			return this.$trans(key, options);
		};

		Vue.prototype.$choice = function(key, plural, options) {
			return lang.choice(key, plural, options);
		};

		Vue.prototype.$tc = function(key, plural, options) {
			return this.$choice(key, plural, options);
		};

		Vue.mixin({
			beforeCreate: function beforeCreate() {
				Vue.util.defineReactive(this, '_lang', lang);
			}
		});
	}
};

return plugin;

})));
