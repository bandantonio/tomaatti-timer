Feature: setting

    As a user
    I want to adjust time duration
    So that I can customize timer

    Background:
        Given the user has browsed to the homepage

    Scenario Outline: user gives valid timer value
        Given the user has opened the settings option
        When the user saves the following settings using webUI
            | cycle      | <cycle>      |
            | shortBreak | <shortBreak> |
            | longBreak  | <longBreak>  |
        Then the countdown should have value "<cycle>"
        Examples:
            | cycle | shortBreak | longBreak |
            | 1     | 2          | 10        |
            | 1.00  | 2.00       | 10.00     |

    Scenario Outline: user gives invalid timer value
        Given the user has opened the settings option
        When the user saves the following settings using webUI
            | cycle      | <cycle>      |
            | shortBreak | <shortBreak> |
            | longBreak  | <longBreak>  |
        Then the alert message "Input must be a number" should pop up
        Examples:
            | cycle | shortBreak | longBreak |
            | 1:00  | 2          | 10        |
            | 1     | 2:00       | 10        |
            | 1     | 2          | 10:00     |
