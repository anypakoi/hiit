import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import AppMenu from '../components/AppMenu';
import Counter from '../screens/counterScreen';
import Settings from '../screens/settingScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={AppMenu} options={({ navigation }) => ({headerRight: () => (
        <Button title="Setting" onPress={() => { navigation.navigate('Setting'); }} />
    ),})}/>
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Setting" component={Settings} />
    </Stack.Navigator>
  )
}

export default AppNavigator