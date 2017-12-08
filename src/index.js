import Lang from "lang.js";

const plugin = {
	install(Vue, options) {
		// Default options
		const Locale = options.locale || "en";
		const fallbackLocale = options.fallback || "en";
		const messages = options.messages || {};

		const lang = new Lang({
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
			beforeCreate() {
				Vue.util.defineReactive(this, "_lang", lang);
			},
			methods: {
				trans(key, options) {
					return lang.trans(key, options);
				},
				t(key, options) {
					return this.trans(key, options);
				},
				choice(key, plural, options) {
					return lang.choice(key, plural, options);
				},
				tc(key, plural, options) {
					return this.choice(key, plural, options);
				}
			}
		});
	}
};

export default plugin;
