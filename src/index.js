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
			beforeCreate() {
				Vue.util.defineReactive(this, '_lang', lang);
			}
		});
	}
};

export default plugin;
