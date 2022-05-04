const config = require("../wdio.conf");
config.capabilities = [
  {
    maxInstances: 5,
    //
    browserName: "firefox",
    acceptInsecureCerts: true,
    "moz:firefoxOptions": {
      prefs: {
        "intl.accept_languages": "en,en-US"
      }
    }
  }
];

exports.config = config;
