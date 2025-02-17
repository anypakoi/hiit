// detox.config.js
module.exports = {
    testRunner: 'jest',
    runnerConfig: 'e2e/config.json',
    configurations: {
      'ios.sim': {
        device: 'iPhone 14', // Puedes cambiar el dispositivo según tus necesidades
        type: 'ios.simulator',
      },
      'android.emu': {
        device: 'Pixel_4_API_30', // Cambia el dispositivo según tus necesidades
        type: 'android.emulator',
      },
    },
  };