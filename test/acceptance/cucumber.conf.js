const { setDefaultTimeout, After, Before, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const { createSession, closeSession, startWebDriver, stopWebDriver } = require("nightwatch-api");

setDefaultTimeout(60000);

BeforeAll(async function () {
  await startWebDriver();
});

// runs before each scenario
Before(async function () {
  await createSession();
});

// runs after each scenario
After(async function () {
  await closeSession();
});

AfterAll(async function () {
  await stopWebDriver();
});
