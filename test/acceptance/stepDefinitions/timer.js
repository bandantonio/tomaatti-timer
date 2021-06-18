const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const assert = require("assert");

const timerPage = client.page.timerPage();

Given("the user has browsed to the homepage", function () {
  return timerPage.navigate().isTimerPage();
});

Given("the user has started the timer with default time and name {string}", function (timerName) {
  return timerPage
    .setTimerName(timerName)
    .startTimer()
    .waitForElementVisible(timerPage.elements.pauseButton);
});

When("the user starts the timer", function () {
  return timerPage.startTimer();
});

When("the user starts the timer with default time and name {string}", function (timerName) {
  return timerPage.setTimerName(timerName).startTimer();
});

When("the user stops the timer after {string} second", function (second) {
  return timerPage.pause(parseInt(second, 10) * 1000).pauseTimer();
});

When("the user resets the timer after {string} second", function (second) {
  return timerPage.pause(parseInt(second, 10) * 1000).resetTimer();
});

Then("the countdown should have value {string}", async function (cycle) {
  let arr = cycle.split(".");
  if (arr[0].length == 1) {
    arr[0] = "0" + arr[0];
  }
  await timerPage.isTimerPage();
  return client.assert.containsText(".minutes", arr[0]);
});

Then("the {string} button should be visible", function (buttonName) {
  if (buttonName == "pause") {
    return timerPage.waitForElementVisible(timerPage.elements.pauseButton);
  } else if (buttonName == "start") {
    return timerPage.waitForElementVisible(timerPage.elements.startButton);
  }
});

Then("the {string} button should not be visible", function (buttonName) {
  if (buttonName == "setting") {
    return timerPage.waitForElementNotVisible(timerPage.elements.settingButton);
  }
});

Then("the alert should appear with message {string}", function (alertMsg) {
  return timerPage.api.getAlertText((res) => {
    assert.strictEqual(res.value, alertMsg, "Actual value of alertMsg is not equal to expected.");
  });
});

Then("the timer should reset to default time", function () {
  return timerPage.waitForElementNotVisible(timerPage.elements.pauseButton);
});

Then("the countdown should be decreased by {string} second", async function (second) {
  const actualSecond = await timerPage.getSecondValue();
  const expectedSecond = `${60 - parseInt(second, 10)}`;
  return assert.strictEqual(
    actualSecond,
    expectedSecond,
    `Expected value ${expectedSecond} but got ${actualSecond}`
  );
});
