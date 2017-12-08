/*!
 * vue-lang-js v0.0.1 
 * (c) 2017 Andre de Waard
 * Released under the MIT License.
 */
import Lang from 'lang.js';

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
            get:function () { return this.$root._lang }
        });
    
        Vue.mixin({
            beforeCreate: function beforeCreate () {
                Vue.util.defineReactive(this, '_lang', lang);
            },
            methods: {
                trans: function trans(key, options) {
                    return lang.trans(key, options); 
                },
                choice: function choice(key, plural ,options) {
                    return lang.choice(key, plural, options); 
                }
            }
        });   
    }
};

export default plugin;
