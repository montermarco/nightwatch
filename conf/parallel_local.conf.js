var browserstack = require("browserstack-local");

nightwatch_config = {
  src_folders: ["tests"],

  webdriver: {
    start_process: false,
    host: "hub-cloud.browserstack.com",
    port: 80
  },

  test_runner: "mocha",

  common_capabilities: {
    build: "nightwatch-browserstack",
    "browserstack.user":
      process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USER",
    "browserstack.key":
      process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_KEY",
    "browserstack.debug": true,
    "browserstack.local": true
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome"
      }
    },
    firefox: {
      desiredCapabilities: {
        browser: "firefox"
      }
    },
    safari: {
      desiredCapabilities: {
        browser: "safari"
      }
    },
    chrome61Win: {
      desiredCapabilities: {
        os: "Windows",
        os_version: "7",
        browser: "Chrome",
        browser_version: "61.0"
      }
    },
    chrome62Win: {
      desiredCapabilities: {
        os: "Windows",
        os_version: "7",
        browser: "Chrome",
        browser_version: "62.0"
      }
    },
    chrome61Mac: {
      desiredCapabilities: {
        os: "OS X",
        os_version: "Mavericks",
        browser: "Chrome",
        browser_version: "61.0"
      }
    },
    chrome62Mac: {
      desiredCapabilities: {
        os: "OS X",
        os_version: "Mavericks",
        browser: "Chrome",
        browser_version: "62.0"
      }
    },
    firefox55Win: {
      desiredCapabilities: {
        os: "Windows",
        os_version: "7",
        browser: "Firefox",
        browser_version: "55.0"
      }
    },
    firefox56Win: {
      desiredCapabilities: {
        os: "Windows",
        os_version: "7",
        browser: "Firefox",
        browser_version: "56.0"
      }
    },
    firefox55Mac: {
      desiredCapabilities: {
        os: "OS X",
        os_version: "Mavericks",
        browser: "Firefox",
        browser_version: "55.0"
      }
    },
    firefox56Mac: {
      desiredCapabilities: {
        os: "OS X",
        os_version: "Mavericks",
        browser: "Firefox",
        browser_version: "56.0"
      }
    },
    safari10: {
      // Safari 10 on Sierra
      desiredCapabilities: {
        os: "OS X",
        os_version: "Sierra",
        browser: "safari",
        browser_version: "10.1"
      }
    },
    safari11: {
      // Safari 11 on High Sierra
      desiredCapabilities: {
        os: "OS X",
        os_version: "High Sierra",
        browser: "Safari",
        browser_version: "11.0"
      }
    },
    ie11: {
      // IE 11 on Windows 7
      desiredCapabilities: {
        os: "Windows",
        os_version: "7",
        browser: "IE",
        browser_version: "11.0"
      }
    },
    edge15: {
      // Edge 16 on Windows 10
      desiredCapabilities: {
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "15.0"
      }
    },
    edge16: {
      // Edge 16 on Windows 10
      desiredCapabilities: {
        os: "Windows",
        os_version: "10",
        browser: "Edge",
        browser_version: "16.0"
      }
    }
  }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config["selenium_host"] = nightwatch_config.webdriver.host;
  config["selenium_port"] = nightwatch_config.webdriver.port;
  config["desiredCapabilities"] = config["desiredCapabilities"] || {};
  for (var j in nightwatch_config.common_capabilities) {
    config["desiredCapabilities"][j] =
      config["desiredCapabilities"][j] ||
      nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;