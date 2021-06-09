const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const assert = require("assert");

Given("the user has opened the settings option", async function () {
  await client.waitForElementVisible("#settings").click("#settings");
  return client.waitForElementVisible(".slider.opened");
});

When("the user sets the cycle duration to {string} using webUI", async function (cycle) {
  return client.clearValue("#cycle-length").setValue("#cycle-length", cycle);
});

When("the user sets the short break duration to {string} using webUI", async function (shortBreak) {
  return client.clearValue("#short-break-length").setValue("#short-break-length", shortBreak);
});

When("the user sets the long break duration to {string} using webUI", async function (longBreak) {
  return client.clearValue("#long-break-length").setValue("#long-break-length", longBreak);
});

When("the user saves the settings using webUI", async function () {
  return client.click("#save-settings");
});

Then(
  "the timer with name {string} should start with cycle duration time {string}",
  async function (timerName, cycle) {
    await client.waitForElementVisible(".slider.closed");
    await client.assert.containsText(".minutes", cycle);
    await client.setValue("#timer-label", timerName).click("#start-timer");
    return client.waitForElementVisible("#pause-timer");
  }
);

Then("the message {string} should appear after {string}", async function (breakMsg, cycle) {
  await client
    .pause(cycle * 60000 + 1000)
    .assert.cssProperty("#break-time", "visibility", "visible")
    .assert.containsText("#break-time", breakMsg);
});

When("the user sets the following durations using webUI", async function (dataTable) {
  const durationSettings = dataTable.rowsHash();
  const { cycle, shortBreak, longBreak } = durationSettings;
  await client.clearValue("#cycle-length").setValue("#cycle-length", cycle);
  await client.clearValue("#short-break-length").setValue("#short-break-length", shortBreak);
  await client.clearValue("#long-break-length").setValue("#long-break-length", longBreak);
});

Then("the timer should start with following values:", async function (dataTable) {
  const timerValues = dataTable.rowsHash();
  const { cycle, timerName } = timerValues;
  await client.waitForElementVisible(".slider.closed").assert.containsText(".minutes", cycle);
  await client.setValue("#timer-label", timerName).click("#start-timer");
  return client.waitForElementVisible("#pause-timer");
});

Then(
  "the message should appear with following message after given time",
  async function (dataTable) {
    const messageData = dataTable.rowsHash();
    const { message, cycle } = messageData;
    return client
      .pause(cycle * 60000 + 1000)
      .assert.cssProperty("#break-time", "visibility", "visible")
      .assert.containsText("#break-time", message);
  }
);

Then("the alert should show following message", function (dataTable) {
  const alert = dataTable.rowsHash();
  return client.getAlertText((res) => {
    assert.strictEqual(res.value, alert.message, "Actual alert message is not equal to expected.");
  });
});
