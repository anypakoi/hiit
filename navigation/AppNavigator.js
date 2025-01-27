import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppMenu from '../components/AppMenu/AppMenu';
import Counter from '../screens/counterScreen';
import Settings from '../screens/settingScreen';
import { Button } from 'react-native';
import { CONFIGHIIT, CONFIGPOMODORO } from '../config/config';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HIITStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Menu"
      component={AppMenu}
      initialParams={CONFIGHIIT}
      options={({ navigation }) => ({
        title: 'HIIT Timer',
        headerRight: () => (
          <Button 
            title="Setting" 
            onPress={() => { navigation.navigate('Setting'); }} 
          />
        ),
      })}
    />
    <Stack.Screen name="Counter" component={Counter} />
    <Stack.Screen name="Setting" component={Settings} />
  </Stack.Navigator>
);

const PomodoroStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Menu"
      component={AppMenu}
      initialParams={CONFIGPOMODORO}
      options={({ navigation }) => ({
        title: 'Pomodoro Timer',
        headerRight: () => (
          <Button 
            title="Setting" 
            onPress={() => { navigation.navigate('Setting'); }} 
          />
        ),
      })}
    />
    <Stack.Screen name="Counter" component={Counter} />
    <Stack.Screen name="Setting" component={Settings} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HIIT" 
        component={HIITStack}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Pomodoro" 
        component={PomodoroStack}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;