exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'tests/e2e/**/*.js'
    //'tests/e2e/spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8100/',

  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};