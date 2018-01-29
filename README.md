# lang-js-vue

This plugin is based on https://github.com/rmariuzzo/Lang.js

## Installation
This Vue plugin can be installed via npm or yarn

### npm 
```
$ npm install @eli5/vue-lang-js
```

### yarn
```
$ yarn add @eli5/vue-lang-js
```

## Initialization

Start by importing the component.

```javascript
import Vue from 'vue'
import VueLang from '@eli5/vue-lang-js'

Vue.use(VueLang, {
    messages: source, // Provide locale file
    locale: 'nl', // Set locale
    fallback: 'en' // Set fallback lacale
})
```

## Usage

Get language string
```javascript
    this.$trans('auth.title')
    this.$trans('auth.title', { name: 'eli5' })
    {{ $trans('auth.title') }}
    {{ $trans('auth.title', { name: 'eli5' }) }}
    
    // Alias
    this.$t('auth.title')
    this.$t('auth.title', { name: 'eli5' })
    {{ $t('auth.title') }}
    {{ $t('auth.title', { name: 'eli5' }) }}
```

Get language string with plural
```javascript
    this.$choice('auth.title', int)
    this.$choice('auth.title', int, { name: 'eli5' })
    {{ $choice('auth.title', int) }}
    {{ $choice('auth.title', int, { name: 'eli5' }) }}

    // Alias
    this.$tc('auth.title', int)
    this.$tc('auth.title', int, { name: 'eli5' })
    {{ $tc('auth.title', int) }}
    {{ $tc('auth.title', int, { name: 'eli5' }) }}
```

Set locale
```javascript
    this.$lang.setLocale('en')
```
