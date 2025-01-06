import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { SOUND_MAP } from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfig } from '../redux/slices/configSlice';

const SoundList = () => {
  const soundRef = useRef(null);
  const dispatch = useDispatch();

  // Obtener el sonido actual desde Redux
  const selectedSound = useSelector((state) => state.config.soundAlarm);

  const stopCurrentSound = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };

  const playSound = async (key) => {
    try {
      // Detener el sonido actual
      await stopCurrentSound();

      const soundFile = SOUND_MAP[key];
      if (!soundFile) {
        console.error('Sound file not found');
        return;
      }

      // Cargar y reproducir el nuevo sonido
      const { sound } = await Audio.Sound.createAsync(soundFile);
      soundRef.current = sound;

      // Actualizar el estado en Redux
      dispatch(updateConfig({ 
        key: 'soundAlarm', 
        value: key 
      }));

      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <View>
      <Text>Sound List</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Object.keys(SOUND_MAP).map((key) => (
          <TouchableOpacity 
            key={key} 
            onPress={() => playSound(key)}
            style={{ 
              padding: 10, 
              margin: 5, 
              backgroundColor: selectedSound === key ? 'lightblue' : 'lightgray' 
            }}
          >
            <Text>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SoundList;
