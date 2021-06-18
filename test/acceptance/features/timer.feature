Feature: timer
    As a user
    I want to use timer
    So that I can manage my schedule

    Background:
        Given the user has browsed to the homepage

    Scenario: user starts the timer without the name
        When the user starts the timer
        Then the alert should appear with message "Please name your Tomaatti first"

    Scenario: user starts the timer with the name
        When the user starts the timer with default time and name "my timer"
        Then the "pause" button should be visible
        When the user stops the timer after "1" second
        Then the "start" button should be visible
        And the countdown should be decreased by "1" second

    Scenario: user resets the timer
        Given the user has started the timer with default time and name "my timer"
        When the user resets the timer after "1" second
        Then the timer should reset to default time
        And the "start" button should be visible

    Scenario: disable setting when the timer is started
        When the user starts the timer with default time and name "my timer"
        Then the "setting" button should not be visible
