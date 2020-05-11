const { setHeadlessWhen } = require('@codeceptjs/configure');
const EXEC = require('child_process');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: true,
      keepBrowserState: true,
      keepCookies: true,
      smartWait: 5000,
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      //windowSize: '1920x1680',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    HomePage: './pages/HomePage.js',
    DraggablePage: './pages/DraggablePage.js'
  },


  // adding bootstrap/teardown
  bootstrap: function(done) {
    console.log('Test started, browser is going to launch now...');
    done();
  },
  teardown: function(done) {
    console.log('Test Ended, browser is going to shutdown now...');
    EXEC.exec("taskkill /f /im %chromedriver");
    console.log('ChromeDriver is killed right now.');
    done();
  },
  "timeout": 5000,

  mocha: {},
  name: 'codeceptWebdriver',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}