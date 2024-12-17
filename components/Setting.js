import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Settings, SOUND_MAP } from '../config/config';
import { useDispatch } from 'react-redux';
import { updateConfig } from '../redux/slices/configSlice';

const SoundList = () => {
  const [currentSound, setCurrentSound] = useState(null);
  const soundRef = useRef(null);
  const dispatch = useDispatch();

  const stopCurrentSound = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };

  const playSound = async (key) => {
    try {
      // Stop any currently playing sound
      await stopCurrentSound();

      const soundFile = SOUND_MAP[key];
      if (!soundFile) {
        console.error('Sound file not found');
        return;
      }

      // Load and play new sound
      const { sound } = await Audio.Sound.createAsync(soundFile);
      soundRef.current = sound;
      setCurrentSound(key);
      
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
              backgroundColor: currentSound === key ? 'lightblue' : 'lightgray' 
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