Feature: start countdown timer
    As a user
    I want to start the countdown timer
    So that I can start my work

Background: 
    Given the user has browsed to the homepage

Scenario: user starts the countdown timer with tommati name
    When the user starts the timer with the tomaati name "tamatar"
    Then the countdown timer starts

Scenario: user starts the countdown timer empty tommati name
    When the user starts the timer with the tomaati name ""
    Then the alert should appear with message "Please name your Tomaatti first"
