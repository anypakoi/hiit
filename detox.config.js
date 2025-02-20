// detox.config.js
module.exports = {
    testRunner: 'jest',
    runnerConfig: 'e2e/counter.spec.js',
    configurations: {
      'ios.sim': {
        device: 'iPhone 14', // Puedes cambiar el dispositivo según tus necesidades
        type: 'ios.simulator',
      },
      'android.emu': {
        device: 'Pixel_Fold_API_35', // Cambia el dispositivo según tus necesidades
        type: 'android.emulator',
      },
    },
  };