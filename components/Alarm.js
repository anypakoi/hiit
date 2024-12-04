import React, { useEffect } from 'react';
import { Audio } from 'expo-av';
import {Settings, SOUND_MAP} from '../config/settings';


const Alarm = ({ shouldPlay }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    try {
      // Use static require with a pre-defined mapping
      const soundFile = SOUND_MAP[Settings.soundAlarm];
      
      if (!soundFile) {
        console.error('Sound file not found');
        return;
      }

      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  }
  
  useEffect(() => {
    if (shouldPlay) {
      playSound();
    }
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [shouldPlay]);

  return null;
};

export default Alarm;
