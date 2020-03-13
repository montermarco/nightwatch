const baseConfig = require('./nightwatch.conf.js');

const config = {
    ...baseConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 80
    },
    test_settings: {
        default: {
          desiredCapabilities: {
            'browserstack.user': 'marcoantoniomont1',
            'browserstack.key': 'uqEny8fhoMqaAYW2ZbYZ',
            'browser': 'chrome'
          }
        }
    }
}
    

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
//config.test_settings.default.desiredCapabilities.chromeOptions.args = [];



// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;