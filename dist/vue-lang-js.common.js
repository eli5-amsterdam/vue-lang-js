/*!
 * vue-lang-js v0.1.0 
 * (c) 2017 undefined
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Lang = _interopDefault(require('lang.js'));

var plugin = {
	install: function install(Vue, options) {
		// Default options
		var Locale = options.locale || "en";
		var fallbackLocale = options.fallback || "en";
		var messages = options.messages || {};

		var lang = new Lang({
			messages: messages,
			locale: Locale,
			fallback: fallbackLocale
		});

		Object.defineProperty(Vue.prototype, "$lang", {
			get: function() {
				return this.$root._lang;
			}
		});

		Vue.mixin({
			beforeCreate: function beforeCreate() {
				Vue.util.defineReactive(this, "_lang", lang);
			},
			methods: {
				trans: function trans(key, options) {
					return lang.trans(key, options);
				},
				t: function t(key, options) {
					return this.trans(key, options);
				},
				choice: function choice(key, plural, options) {
					return lang.choice(key, plural, options);
				},
				tc: function tc(key, plural, options) {
					return this.choice(key, plural, options);
				}
			}
		});
	}
};

module.exports = plugin;
