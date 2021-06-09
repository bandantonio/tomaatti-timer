  const {Given, When, Then} = require('@cucumber/cucumber')
  const {client} = require('nightwatch-api')
  const assert = require('assert')

  Given('the user has browsed to the homepage', function () {
    return client.url(client.launch_url).waitForElementVisible("div.title");
  });

  When('the user starts the timer with the tomaati name {string}', function (timerName) {
    return client.setValue("#timer-label", timerName).click("#start-timer");
  });

  Then('the countdown timer starts', function () {
    return client.waitForElementVisible("#pause-timer");
  });

  Then('the alert should appear with message {string}', function (alertMsg) {
    return client.getAlertText((res)=>{
      assert.strictEqual(res.value, alertMsg, "Actual value of alertMsg is not equal to expected.")
    })
  });
