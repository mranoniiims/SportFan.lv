import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details information' }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}