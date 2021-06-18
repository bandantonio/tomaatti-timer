const LAUNCH_URL = process.env.LAUNCH_URL || "http://localhost:5000/";
module.exports = {
  page_objects_path: "test/acceptance/pageObjects/",
  test_settings: {
    default: {
      launch_url: LAUNCH_URL,
      desiredCapabilities: {
        browserName: "chrome",
      },
      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
        port: 4445,
      },
    },
  },
};
