import 'react-native-gesture-handler';


import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'home'}
          component={Home}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
