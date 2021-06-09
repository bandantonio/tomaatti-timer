const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api"); //nightwatch wrapper to support cucumber

//cucumber expression turned/toggle
// or can use regex
Given("the sound option has been turned/toggle {string}", async function (state) {
  await client.waitForElementVisible("#sound");
  if (state === "off") {
    await client.click("#sound");
  }
  return client.assert.cssClassPresent("#sound", state);
});

When("the user toggles the sound", function () {
  return client.click("#sound");
});

Then("the sound option should be {string}", function (endState) {
  return client.assert.cssClassPresent("#sound", endState);
});

Given("the user has started the timer with name {string}", async function (timerName) {
  await client.assert.cssProperty("#pause-timer", "display", "none");
  await client.waitForElementVisible("#timer-label").setValue("#timer-label", timerName).click("#start-timer");
  await client.assert.cssProperty("#pause-timer", "display", "inline-block");
  return client.assert.cssProperty("#start-timer", "display", "none");
});
