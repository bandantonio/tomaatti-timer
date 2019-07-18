'use strict';

import * as storage from './storage.js';
import * as controls from './controls.js';
import * as breaks from './breaks.js';
import * as helpers from './helpers.js';

let toggleSettingsPageIcon = document.getElementById('settings');
let toggleSoundSettingIcon = document.getElementById('sound');
let slider = document.querySelector('.slider');
let saveSettingsButton = document.getElementById('save-settings');
let cancelSettingsButton = document.getElementById('cancel');
let settingsBlock = document.getElementsByClassName('settings-input');

function openSettingsPage() {
  if (slider.classList.contains('closed')) {
    slider.classList.remove('closed');
    slider.classList.add('opened');
    preloadStoredSettings();
  } else return;
}

function preloadStoredSettings() {
  let storedSettings = storage.pullSettingsFromStorage();
  let [cycleDuration, shortBreakDuration, longBreakDuration] = Array.from(settingsBlock);
  cycleDuration["value"] = storedSettings.cycleDuration;
  shortBreakDuration["value"] = storedSettings.shortBreakDuration;
  longBreakDuration["value"] = storedSettings.longBreakDuration;

  breaks.setShortBreakTime(shortBreakDuration["value"]);
  breaks.setLongBreakTime(longBreakDuration["value"]);
  helpers.enableTicking(setSoundState(storedSettings.soundEnabled));
  controls.presetTimer();
}

function saveSettings() {
  let [cycleDuration, shortBreakDuration, longBreakDuration] = Array.from(settingsBlock);
  if (isNaN(cycleDuration["value"]) ||
  isNaN(shortBreakDuration["value"]) ||
  isNaN(longBreakDuration["value"])) {
    alert('Input must be a number');
    return;
  } else if (cycleDuration["value"] > 99 ||
  shortBreakDuration["value"] > 99 ||
  longBreakDuration["value"] > 99) {
    alert('Please choose a shorter interval (1 - 99)');
    return;
  } else {
    let newSettings = {
      cycleDuration: +cycleDuration["value"],
      shortBreakDuration: +shortBreakDuration["value"],
      longBreakDuration: +longBreakDuration["value"],
      soundEnabled: storage.getSoundState(),
    }
    storage.saveSettings(newSettings);
  }
  preloadStoredSettings();
  closeSettingsPage();
}

function closeSettingsPage() {
  if (slider.classList.contains('opened')) {
    slider.classList.remove('opened');
    slider.classList.add('closed');
  } else return;
}

function disableSettingsPage(state) {
  return (state === true) ?
    toggleSettingsPageIcon.style.display = 'none' :
    toggleSettingsPageIcon.style.display = '';
}

function setSoundState(state) {
  if (state) {
    toggleSoundSettingIcon.className = 'on'
    return true;
  } else {
    toggleSoundSettingIcon.className = 'off'
    helpers.enableTicking(false);
    return false;
  }
}

function toggleSound() {
  if (toggleSoundSettingIcon.className == 'on') {
    setSoundState(false);
    helpers.enableTicking(false);
    storage.saveSoundState(false);
  } else {
    setSoundState(true);
    helpers.enableTicking(true);
    storage.saveSoundState(true); 
  }
}

export {
  toggleSettingsPageIcon,
  toggleSoundSettingIcon,
  openSettingsPage,
  closeSettingsPage,
  preloadStoredSettings,
  saveSettingsButton,
  cancelSettingsButton,
  saveSettings,
  disableSettingsPage,
  toggleSound,
};