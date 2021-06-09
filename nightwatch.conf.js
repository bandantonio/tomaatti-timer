const LAUNCH_URL = process.env.LAUNCH_URL || "http://localhost:5000/";
module.exports = {
  src_folders: ["test"],
  test_settings: {
    default: {
      selenium_host: "127.0.0.1",
      launch_url: LAUNCH_URL,
      globals: {},
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        chromeOptions: {},
      },
    },
  },
};
