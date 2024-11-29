import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Counter from '../components/Counter'

export default function counterScreen({ navigation, route }) {
  const { workTime, breakTime, timeCycle } = route.params;

  return (
    <View style={styles.container}>
          <Button 
            title='stop' 
            onPress={() => navigation.navigate('Menu')} 
          />
          <Counter 
            workTime={parseInt(workTime)} 
            breakTime={parseInt(breakTime)}
            timeCycle={parseInt(timeCycle)} 
          />
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