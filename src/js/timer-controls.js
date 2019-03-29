'use strict';

import helpers from './helpers.js';
import breaks from './breaks.js';
import settings from './settings.js';

let timer = (function() {
  let startingTime = 5;
  let isTimerOn = false;
  let timeOnPause = 0;
  let startButton = document.getElementById('start-timer');
  let pauseButton = document.getElementById('pause-timer');
  let resetButton = document.getElementById('reset-timer');
  let minutesSelector = document.querySelector('.minutes');
  let secondsSelector = document.querySelector('.seconds');
  let tomaattiLabel = document.getElementById('timer-label');
  
  function preset() {
    minutesSelector.innerHTML = ('0' + String(startingTime)).slice(-2);
    secondsSelector.innerHTML = '00';
    startButton.style.display = 'initial';
    pauseButton.style.display = 'none';
  }
  
  function start() {
    if (!tomaattiLabel["value"]) return alert('Please name your Tomaatti first');
    if (!isTimerOn && timeOnPause === 0) {
      helpers.countdown(helpers.minToMsec(startingTime));
    } else if (!isTimerOn && timeOnPause !== 0) {
      helpers.countdown(timeOnPause);
      pauseButton.classList.remove('paused');
    }
    isTimerOn = true;
    maniputateElementsAfterStart();
  }
  
  function maniputateElementsAfterStart() {
    tomaattiLabel.setAttribute('disabled', 'disabled');
    startButton.style.display = 'none';
    pauseButton.style.display = 'initial';
  }
  
  function reset() {
    clearTimeout(helpers.getTimeoutID());
    isTimerOn = false;
    timeOnPause = 0;
    settings.disableSettingsPage(false);
    tomaattiLabel.removeAttribute('disabled');
    breaks.setBreakState(false);
    if ( breaks.breakTimeLabel.style.visibility === 'visible') {
      breaks.breakTimeLabel.style.visibility = 'hidden'
    }
    if (pauseButton.classList.contains('paused')) {
      pauseButton.classList.remove('paused');
    }
    preset();
  }
  
  function pause() {
    isTimerOn = false;
    clearTimeout(helpers.getTimeoutID());
    startButton.style.display = 'initial';
    pauseButton.style.display = 'none';

    if (!pauseButton.classList.contains('paused')) {
      pauseButton.classList.add('paused');
    }
  }
  
  function getStartTime() {
    return startingTime;
  }
  
  function setStartTime(minutes) {
    startingTime = minutes;
    return startingTime;
  }

  function setTimeOnPause(milliseconds) {
    timeOnPause = milliseconds;
    return timeOnPause;
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
    pause: pause,
    reset: reset,
    minutesSelector: minutesSelector,
    secondsSelector: secondsSelector,
    startButton: startButton,
    pauseButton: pauseButton,
    resetButton: resetButton,
    tomaattiLabel: tomaattiLabel,
    getStartTime: getStartTime,
    setStartTime: setStartTime,
    setTimeOnPause: setTimeOnPause,
    getTimerState: getTimerState,
    setTimerState: setTimerState,
    getTomaattiName: getTomaattiName
  }
}());

export default timer;