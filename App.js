import 'react-native-gesture-handler';


import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ShowScreen from './src/screens/ShowScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'indexScreen'}
            component={IndexScreen}
          />
          <Stack.Screen
            name={'createScreen'}
            component={CreateScreen}
          />
          <Stack.Screen
            name={'editScreen'}
            component={EditScreen}
          />
          <Stack.Screen
            name={'showScreen'}
            component={ShowScreen}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
