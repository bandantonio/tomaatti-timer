'use strict';

import * as helpers from './helpers.js';
import * as breaks from './breaks.js';
import * as settings from './settings.js';

let startButton = document.getElementById('start-timer');
let pauseButton = document.getElementById('pause-timer');
let resetButton = document.getElementById('reset-timer');
let tomaattiLabel = document.getElementById('timer-label');
let minutesSelector = document.querySelector('.minutes');
let secondsSelector = document.querySelector('.seconds');

let pomodoroInterval;
let isTimerOn = false;
let timerOnPause = 0;

function presetTimer() {
  pomodoroInterval = JSON.parse(localStorage.getItem('tomaatti-timer'));
  if (pomodoroInterval.cycleDuration < 10) {
    minutesSelector.innerHTML = ('0' + pomodoroInterval.cycleDuration).slice(-2);
  } else {
    minutesSelector.innerHTML = (String(pomodoroInterval.cycleDuration)).slice(-2);
  }
  secondsSelector.innerHTML = '00';
  startButton.style.display = 'initial';
  pauseButton.style.display = 'none';
}

function startTimer() {
  if (!tomaattiLabel["value"]) return alert('Please name your Tomaatti first');
  if (!isTimerRunning() && isTimerOnPause() === 0) {
    helpers.countdown(helpers.minutesToMilliseconds(pomodoroInterval.cycleDuration));
  } else if (!isTimerRunning() && isTimerOnPause() !== 0) {
    helpers.countdown(isTimerOnPause());
    pauseButton.classList.remove('paused');
  }
  isTimerRunning(true);
  changeElementStylesOnStart();
}

function changeElementStylesOnStart() {
  tomaattiLabel.setAttribute('disabled', 'disabled');
  startButton.style.display = 'none';
  pauseButton.style.display = 'initial';
}

function resetTimer() {
  clearTimeout(helpers.getTimeoutID());
  isTimerRunning(false);
  setTimerOnPause(0);
  settings.disableSettingsPage(false);
  tomaattiLabel.removeAttribute('disabled');
  breaks.setBreakState(false);
  
  if ( breaks.breakTimeLabel.style.visibility === 'visible' ) {
    breaks.breakTimeLabel.style.visibility = 'hidden'
  }
  if (pauseButton.classList.contains('paused')) {
    pauseButton.classList.remove('paused');
  }
  presetTimer();
}

function pauseTimer() {
  isTimerRunning(false);
  clearTimeout(helpers.getTimeoutID());
  startButton.style.display = 'initial';
  pauseButton.style.display = 'none';
  
  if (!pauseButton.classList.contains('paused')) {
    pauseButton.classList.add('paused');
  }
}

function isTimerRunning(state) {
  if (state === null) {
    return isTimerOn;
  } else {
    isTimerOn = state;
    return isTimerOn;
  }
}

function setPomodoroInterval(minutes) {
  return (minutes < 10) ? pomodoroInterval = '0' + minutes : pomodoroInterval;
}

function tomaattiName() {
  return tomaattiLabel["value"];
}

function isTimerOnPause() {
  return timerOnPause;
}

function setTimerOnPause(milliseconds) {
  timerOnPause = milliseconds;
  return timerOnPause;
}

export {
  startButton,
  pauseButton,
  resetButton,
  minutesSelector,
  secondsSelector,
  setPomodoroInterval,
  isTimerRunning,
  presetTimer,
  startTimer,
  pauseTimer,
  resetTimer,
  setTimerOnPause,
  tomaattiLabel
}