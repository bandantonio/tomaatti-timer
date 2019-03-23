'use strict';

import storage from './storage.js';
import timer from './timer-controls.js';
import breaks from './breaks.js';
import helpers from './helpers.js';

let settings = (function () {
  let toggleSettingsPage = document.getElementById('settings');
  let toggleSoundSetting = document.getElementById('sound');
  let slider = document.querySelector('.slider');
  let saveSettingsButton = document.getElementById('save-settings');
  let cancelSettingsButton = document.getElementById('cancel');
  let settingsBlock = document.getElementsByClassName('settings-input');
  
  function openSettingsPage() {
    if (slider.classList.contains('closed')) {
      slider.classList.remove('closed');
      slider.classList.add('opened');
    } else return;
  }
  
  function preload() {
    let storedSettings = storage.pull();
    let [cycleDuration, shortBreakDuration, longBreakDuration] = Array.from(settingsBlock);
    cycleDuration["value"] = storedSettings.cycleDuration;
    shortBreakDuration["value"] = storedSettings.shortBreakDuration;
    longBreakDuration["value"] = storedSettings.longBreakDuration;
    
    timer.setStartTime(cycleDuration["value"]);
    timer.preset();
    breaks.setShortBreakTime(shortBreakDuration["value"]);
    breaks.setLongBreakTime(longBreakDuration["value"]);
    helpers.enableTicking(setSoundState(storedSettings.soundEnabled));
  }
  
  function save() {
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
        cycleDuration: cycleDuration["value"],
        shortBreakDuration: shortBreakDuration["value"],
        longBreakDuration: longBreakDuration["value"],
        soundEnabled: storage.getSoundState(),
      }
      storage.save(newSettings);
    }
    preload();
    closeSettingsPage();
  }
  
  function closeSettingsPage() {
    if (slider.classList.contains('opened')) {
      slider.classList.remove('opened');
      slider.classList.add('closed');
    } else return;
  }
  
  function disableSettingsPage(state) {
    return (state === true) ? toggleSettingsPage.style.display = 'none' : toggleSettingsPage.style.display = '';
  }
  
  function setSoundState(state) {
    if (state) {
      toggleSoundSetting.className = 'on'
      return true;
    } else {
      toggleSoundSetting.className = 'off'
      helpers.enableTicking(false);
      return false;
    }
  }
  
  function toggleSound() {
    if (toggleSoundSetting.className == 'on') {
      setSoundState(false);
      helpers.enableTicking(false);
      storage.saveSoundState(false);
    } else {
      setSoundState(true);
      helpers.enableTicking(true);
      storage.saveSoundState(true); 
    }
  }
  
  return {
    toggleSettingsPage: toggleSettingsPage,
    toggleSoundSetting: toggleSoundSetting,
    openSettingsPage: openSettingsPage,
    closeSettingsPage: closeSettingsPage,
    saveSettingsButton: saveSettingsButton,
    cancelSettingsButton: cancelSettingsButton,
    preload: preload,
    save: save,
    disableSettingsPage: disableSettingsPage,
    toggleSound: toggleSound
  }
}());

export default settings;