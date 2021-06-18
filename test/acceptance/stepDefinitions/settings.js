const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const assert = require("assert");

const timerPage = client.page.timerPage();
const settingPage = client.page.settingPage();

Given("the user has opened the settings option", async function () {
  await timerPage.openSetting();
  return settingPage.isSettingPage();
});

When("the user saves the following settings using webUI", async function (dataTable) {
  const durationSettings = dataTable.rowsHash();
  const { cycle, shortBreak, longBreak } = durationSettings;
  return settingPage.saveSettings(cycle, shortBreak, longBreak);
});

Then("the alert message {string} should pop up", function (alertMsg) {
  return settingPage.api.getAlertText((res) => {
    assert.strictEqual(res.value, alertMsg, "Actual alert message is not equal to expected.");
  });
});
