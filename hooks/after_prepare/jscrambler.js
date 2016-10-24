#!/usr/bin/env node

var jscrambler = require('jscrambler').default;

jscrambler.protectAndDownload({
  'keys': {
    'accessKey': 'JSCRAMBLER_ACCESS_KEY',
    'secretKey': 'JSCRAMBLER_SECRET_KEY'
  },
  'applicationId': 'YOUR_APP_ID',
  'filesSrc': [
    './platform/android/assets/www/*.{js,html}',
    './platform/android/assets/www/js/*.js',
    './platform/android/assets/www/templates/*.html',
  ],
  'filesDest': './',
  'params': [
    {
      'name': 'whitespaceRemoval'
    },
    {
      'name': 'duplicateLiteralsRemoval'
    },
    {
      'name': 'functionReordering'
    },
    {
      'name': 'dotToBracketNotation'
    },
    {
      'name': 'functionOutlining'
    },
    {
      'name': 'booleanToAnything'
    },
    {
      'name': 'stringSplitting',
      'options': {
        'chunk': 0.25
      }
    },
    {
      'name': 'identifiersRenaming',
    },
    {
      'name': 'propertyKeysReordering'
    },
    {
      'name': 'propertyKeysObfuscation'
    }
  ],
  'areSubscribersOrdered': false,
  'applicationTypes': {
    'webBrowserApp': false,
    'desktopApp': false,
    'serverApp': false,
    'hybridMobileApp': false,
    'javascriptNativeApp': false,
    'html5GameApp': false
  },
  'languageSpecifications': {
    'es5': true,
    'es6': false,
    'es7': false
  }
})
.then(function () {
  console.log('Jscrambler done!');
});
