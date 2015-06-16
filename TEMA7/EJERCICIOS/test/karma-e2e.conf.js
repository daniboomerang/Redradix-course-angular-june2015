exports.config = {

  /*specs: ['e2e/*.js'],

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 2
  },*/

	multiCapabilities: [
    /* TINY DEVICES */
    {   
       'browserName': 'chrome',
       'chromeOptions' : {
        args: ['--window-size=320,800']
       },

       specs: ['e2e/*.js']
    },
    /* SMALL DEVICES */
    {
       'browserName': 'chrome',
       'chromeOptions' : {
        args: ['--window-size=680,800']
       },

       specs: ['e2e/*.js']
    },
    /* MEDIUM DEVICES */
    {
       'browserName': 'chrome',
       'chromeOptions' : {
        args: ['--window-size=1280,800']
       },

       specs: ['e2e/*.js']
    }
  ],

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

};