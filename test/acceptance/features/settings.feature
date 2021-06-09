Feature: setting

    As a user
    I want to adjust time duration
    So that I can customize timer

    Background:
        Given the user has browsed to the homepage

    Scenario: user changes the time duration
        Given the user has opened the settings option
        When the user sets the cycle duration to ".1" using webUI
        And the user sets the short break duration to "1" using webUI
        And the user sets the long break duration to "2" using webUI
        And the user saves the settings using webUI
        Then the timer with name "tamatar" should start with cycle duration time ".1"
        And the message "Break time!" should appear after ".1"

    Scenario: user changes the time duration
        Given the user has opened the settings option
        When the user sets the following durations using webUI
            | cycle      | .1 |
            | shortBreak | 1  |
            | longBreak  | 2  |
        And the user saves the settings using webUI
        Then the timer should start with following values:
            | timerName | tamatar |
            | cycle     | .1      |
        And the message should appear with following message after given time
            | message | Break time! |
            | cycle   | .1          |


    Scenario Outline: user changes the time duration
        Given the user has opened the settings option
        When the user sets the following durations using webUI
            | cycle      | <cycle>      |
            | shortBreak | <shortBreak> |
            | longBreak  | <longBreak>  |
        And the user saves the settings using webUI
        Then the timer should start with following values:
            | timerName | <timerName> |
            | cycle     | <cycle>     |
        And the message should appear with following message after given time
            | message | <message> |
            | cycle   | <cycle>   |
        Examples:
            | cycle | shortBreak | longBreak | timerName | message     |
            | .1    | 1          | 2         | tamatar   | Break time! |
            | .2    | 2          | 3         | lalu      | Break time! |

    Scenario Outline: user gives invalid timer value
        Given the user has opened the settings option
        When the user sets the following durations using webUI
            | cycle      | <cycle>      |
            | shortBreak | <shortBreak> |
            | longBreak  | <longBreak>" |
        And the user saves the settings using webUI
        Then the alert should show following message
            | message | <alertMessage> |
        Examples:
            | cycle | shortBreak | longBreak | alertMessage           |
            | ".1"  | "1"        | "2"       | Input must be a number |
            | ".2"  | "2"        | "3"       | Input must be a number |
