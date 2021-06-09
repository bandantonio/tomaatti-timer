Feature: reset countdown timer
    As a user
    I want to reset the countdown timer
    So that I can re adjust my work

    Background:
        Given the user has started the timer with the tommati name "tamatar"

    Scenario: user resets the timer
        When the user resets the timer
        Then the countdown timer resets to default value