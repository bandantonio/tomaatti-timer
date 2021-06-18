const { setDefaultTimeout, After, Before, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const { createSession, closeSession } = require("nightwatch-api");

setDefaultTimeout(60000);

BeforeAll(async function () {});

// runs before each scenario
Before(async function () {
  await createSession();
});

// runs after each scenario
After(async function () {
  await closeSession();
});

AfterAll(async function () {});
