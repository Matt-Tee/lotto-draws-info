import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <StatusBar/>
      <BottomTabNavigator />
    </Container>
  );
}
