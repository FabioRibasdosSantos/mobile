import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../mobile/src/routes'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#CFCBC3" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}


