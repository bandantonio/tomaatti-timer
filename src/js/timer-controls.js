'use strict';

import helpers from './helpers.js';
import breaks from './breaks.js';
import settings from './settings.js';

let timer = (function() {
  let startingTime = 5;
  let isTimerOn = false;
  let startButton = document.getElementById('start-timer');
  let resetButton = document.getElementById('reset-timer');
  let minutesSelector = document.querySelector('.minutes');
  let secondsSelector = document.querySelector('.seconds');
  let tomaattiLabel = document.getElementById('timer-label');
  
  function preset() {
    minutesSelector.innerHTML = ('0' + String(startingTime)).slice(-2);
    secondsSelector.innerHTML = '00';
  }
  
  function start() {
    if (!tomaattiLabel["value"]) alert('Please name your Tomaatti first');
    else if (!isTimerOn) {
      isTimerOn = true;
      tomaattiLabel.setAttribute('disabled', 'disabled');
      startButton.style.display = 'none';
      return helpers.countdown(helpers.minToMsec(startingTime));
    }
  }

  function reset() {
    clearTimeout(helpers.getTimeoutID());
    isTimerOn = false;
    settings.disableSettingsPage(false);
    tomaattiLabel.removeAttribute('disabled');
    breaks.setBreakState(false);
    if ( breaks.breakTimeLabel.style.visibility === 'visible') {
      breaks.breakTimeLabel.style.visibility = 'hidden'
    }
    if (startButton.style.display === 'none') {
      startButton.style.display = 'initial';
    }
    preset();
  }
  
  function getStartTime() {
    return startingTime;
  }

  function setStartTime(minutes) {
    startingTime = minutes;
    return startingTime;
  }

  function getTimerState() {
    return isTimerOn;
  }

  function setTimerState(state) {
    isTimerOn = state;
    return isTimerOn;
  }

  function getTomaattiName() {
    return tomaattiLabel["value"];
  }

  return {
    preset: preset,
    start: start,
    reset: reset,
    minutesSelector: minutesSelector,
    secondsSelector: secondsSelector,
    startButton: startButton,
    resetButton: resetButton,
    tomaattiLabel: tomaattiLabel,
    getStartTime: getStartTime,
    setStartTime: setStartTime,
    getTimerState: getTimerState,
    setTimerState: setTimerState,
    getTomaattiName: getTomaattiName
  }
}());

export default timer;