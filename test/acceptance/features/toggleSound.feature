Feature: start countdown timer
    As a user
    I want to toggle sound
    So that I can switch sound on and off when needed

    Background:
        Given the user has browsed to the homepage

    Scenario Outline: user toggle the sound before naming the timer
        Given the sound option has been turned "<initState>"
        When the user toggles the sound
        Then the sound option should be "<endState>"
        Examples:
            | initState | action | endState |
            | on        | off    | off      |
            | off       | on     | on       |

    Scenario Outline: user toggle the sound after starting the timer
        Given the user has started the timer with name 'tamatar'
        And the sound option has been turned "<initState>"
        When the user toggles the sound
        Then the sound option should be "<endState>"
        Examples:
            | initState | action | endState |
            | on        | off    | off      |
            | off       | on     | on       |