'use strict';

import * as controls from './controls.js';
import * as helpers from './helpers.js';
import * as settings from './settings.js';

let tomaattiCycles = 0;
let shortBreakTime = 2;
let longBreakTime = 3;
let isBreak = false;

let breakTimeLabel = document.getElementById('break-time');
let breakStartSound = new Audio('./src/assets/audio/break-start.mp3');
let breakEndSound = new Audio('./src/assets/audio/break-end.mp3');

function breakStarted(ticking) {
  console.log(ticking, "state")
  tomaattiCycles += 1;
  setBreakState(true);
  controls.isTimerRunning(false);
  if (ticking) {
    playBreakStartSound();
  }
  breakTimeLabel.style.visibility = 'visible';
  setTimeout(() => {
    breakSelector();
  }, 3000);
}

function breakSelector() {
  if (tomaattiCycles < 4) {
    return short();
  } else {
    return long();
  }
}

function short() {
  helpers.countdown(helpers.minutesToMilliseconds(shortBreakTime));
}

function long() {
  resetTomaattiCycles();
  helpers.countdown(helpers.minutesToMilliseconds(longBreakTime));
}

function breakFinished(ticking) {
  isBreak = false;
  breakTimeLabel.style.visibility = 'hidden';
  controls.tomaattiLabel.removeAttribute('disabled');
  controls.startButton.style.display = 'initial';
  settings.disableSettingsPage(false);
  if (ticking) {
    playBreakEndSound();
  }
  return controls.presetTimer();
}

function getBreakState() {
  return isBreak;
}

function setBreakState(state) {
  isBreak = state;
  return isBreak;
}

function resetTomaattiCycles() {
  tomaattiCycles = 0;
  return tomaattiCycles;
}

function getShortBreakTime() {
  return shortBreakTime;
  
}

function setShortBreakTime(minutes) {
  shortBreakTime = minutes;
  return shortBreakTime;
}

function getLongBreakTime() {
  return longBreakTime;
}

function setLongBreakTime(minutes) {
  longBreakTime = minutes;
  return longBreakTime;
}

function playBreakStartSound() {
  breakStartSound.load();
  breakStartSound.play();
}

function playBreakEndSound() {
  breakEndSound.load();
  breakEndSound.play();
}

export {
  getBreakState,
  setBreakState,
  setShortBreakTime,
  setLongBreakTime,
  breakStarted,
  breakFinished,
  breakTimeLabel
}