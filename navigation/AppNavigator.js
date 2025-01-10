import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import AppMenu from '../components/AppMenu';
import Counter from '../screens/counterScreen';
import Settings from '../screens/settingScreen';
import { Button } from 'react-native';
import { CONFIGHIIT, CONFIGPOMODORO } from '../config/config';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Menu" 
        options={({ navigation }) => ({
          headerRight: () => (
            <Button 
              title="Setting" 
              onPress={() => { navigation.navigate('Setting'); }} 
            />
          ),
        })}
      >
        {(props) => <AppMenu {...props} {...CONFIGHIIT} />}
      </Stack.Screen>
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Setting" component={Settings} />
    </Stack.Navigator>
  )
}

export default AppNavigator;