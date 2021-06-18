const LAUNCH_URL = process.env.LAUNCH_URL || "http://localhost:5000/";
module.exports = {
  page_objects_path: "test/acceptance/pageObjects/",
  test_settings: {
    default: {
      launch_url: LAUNCH_URL,
      desiredCapabilities: {
        browserName: "chrome",
      },
      selenium: {
        start_process: false,
        host:"localhost",
        port: 4444,
      },
    },
  },
};
