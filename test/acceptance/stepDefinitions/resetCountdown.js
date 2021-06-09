const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");
const assert = require("assert");

Given("the user has started the timer with the tommati name {string}", function (timerName) {
  return client
    .url(client.launch_url)
    .waitForElementVisible("div.title")
    .setValue("#timer-label", timerName)
    .click("#start-timer")
    .waitForElementVisible("#pause-timer");
});

When("the user resets the timer", function () {
  return client.click("#reset-timer");
});

Then("the countdown timer resets to default value", function () {
  return client.waitForElementNotVisible("#pause-timer");
});
