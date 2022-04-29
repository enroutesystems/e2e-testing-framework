const config = require("../wdio.conf");
config.capabilities = [
  {
    maxInstances: 5,

    browserName: "chrome",
    acceptInsecureCerts: true,
    "goog:chromeOptions": {
      prefs: {
        "intl.accept_languages": "en,en-US"
      }
    }
  }
];
config.services = ["chromedriver"];

exports.config = config;
