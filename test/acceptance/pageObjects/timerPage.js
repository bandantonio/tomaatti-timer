module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  commands: {
    isTimerPage: function () {
      return this.waitForElementVisible("@pageTitle");
    },

    setTimerName: function (timerName) {
      return this.waitForElementVisible("@timerNameField")
        .clearValue("@timerNameField")
        .setValue("@timerNameField", timerName);
    },

    getMinuteValue: async function () {
      let minute;
      await this.waitForElementVisible("@minutesValue").getText(
        "@minutesValue",
        (res) => (minute = res.value)
      );
      return minute;
    },

    getSecondValue: async function () {
      let seconds;
      await this.waitForElementVisible("@secondValue").getText(
        "@secondValue",
        (res) => (seconds = res.value)
      );
      return seconds;
    },

    startTimer: function () {
      return this.waitForElementVisible("@startButton").click("@startButton");
    },

    resetTimer: function () {
      return this.waitForElementVisible("@resetButton").click("@resetButton");
    },

    pauseTimer: function () {
      return this.waitForElementVisible("@pauseButton").click("@pauseButton");
    },

    openSetting: function () {
      return this.waitForElementVisible("@settingButton").click("@settingButton");
    },
  },
  elements: {
    timerPage: ".tomaatti-timer",
    pageTitle: "div.title",
    timerNameField: "#timer-label",
    startButton: "#start-timer",
    resetButton: "#reset-timer",
    pauseButton: "#pause-timer",
    minutesValue: ".minutes",
    secondValue: ".seconds",
    breakLabel: "#break-time",
    settingButton: "#settings",
  },
};
