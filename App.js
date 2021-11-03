import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='Image'
          component={ViewImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

