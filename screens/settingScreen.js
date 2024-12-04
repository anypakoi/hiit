import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SoundList from '../components/Setting';

export default function Settings() {
  return (
    <View style={styles.container}>
      <SoundList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 