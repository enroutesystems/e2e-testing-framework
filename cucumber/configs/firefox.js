const config = require("../wdio.conf");

config.capabilities = [
  {
    browserName: "firefox",
    "moz:firefoxOptions": {
      args: ["-headless"]
    }
  }
];
config.services = ["selenium-standalone"];
exports.config = config;
