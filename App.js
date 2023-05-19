import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../mobile/src/routes'
//import firebase from './path/to/firebaseConfig'; // Adjust the import path if necessary


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#002659" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}


