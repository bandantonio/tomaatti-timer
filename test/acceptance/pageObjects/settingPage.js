module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  commands: {
    isSettingPage: function () {
      return this.waitForElementVisible("@settingPage");
    },

    setCycle: function (cycle) {
      return this.waitForElementVisible("@cycleField")
        .clearValue("@cycleField")
        .setValue("@cycleField", cycle);
    },

    setShortBreak: function (shortBreak) {
      return this.waitForElementVisible("@shortBreakField")
        .clearValue("@shortBreakField")
        .setValue("@shortBreakField", shortBreak);
    },

    setLongBreak: function (longBreak) {
      return this.waitForElementVisible("@longBreakField")
        .clearValue("@longBreakField")
        .setValue("@longBreakField", longBreak);
    },

    saveSettings: async function (cycle, shortBreak, longBreak) {
      await this.setCycle(cycle);
      await this.setShortBreak(shortBreak);
      await this.setLongBreak(longBreak);
      return this.waitForElementVisible("@saveButton").click("@saveButton");
    },
  },
  elements: {
    settingPage: ".tomaatti-settings",
    pageTitle: "div.title",
    cycleField: "#cycle-length",
    shortBreakField: "#short-break-length",
    longBreakField: "#long-break-length",
    saveButton: "#save-settings",
  },
};
