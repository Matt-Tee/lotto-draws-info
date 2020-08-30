import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Container from './components/Container'
import MainStackNavigator from './navigation/MainStackNavigator'

export default function App() {
  return (
    <Container>
      <StatusBar />
      <MainStackNavigator />
    </Container>
  )
}
