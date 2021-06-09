const { setDefaultTimeout, After, Before } = require('@cucumber/cucumber')
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api')

setDefaultTimeout(60000)
//before with start our test (setting up env)
Before(async () => {
    await startWebDriver();
    await createSession();
})
//after finishing the test
After(async () => {
    await closeSession();
    await stopWebDriver();
})
