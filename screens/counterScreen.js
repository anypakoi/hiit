import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Counter from '../components/Counter/Counter'

export default function CounterScreen({ navigation, route }) {
  const { workTime, breakTime, timeCycle, restTime, unitTime } = route.params;

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
            restTime={parseInt(restTime)}
            unitTime={parseInt(unitTime)}
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