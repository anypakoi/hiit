const SOUND_MAP = {
    'alarm clock': require('../assets/sounds/alarm-clock.mp3'),
    'bell ringing': require('../assets/sounds/bell-ringing.mp3'),
    'germany': require('../assets/sounds/germany.mp3'),
    'ireland': require('../assets/sounds/ireland.mp3'),
    'kazakhstan': require('../assets/sounds/kazakhstan.mp3'),
    'wallis': require('../assets/sounds/wallis.mp3'),
};

const CONFIGHIIT = {
    workTime: 30,
    breakTime: 30,
    timeCycle: 3,
    restCycle: 10,
    unitTime: 1, // un segundo
  };

const CONFIGPOMODORO = {
    worktime: 25,
    breakTime: 10,
    timeCycle: 3,
    restCycle: 4,
    unitTime: 60, // un minuto
};

export {SOUND_MAP, CONFIGHIIT, CONFIGPOMODORO}