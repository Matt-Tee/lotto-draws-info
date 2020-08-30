import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Container from './components/Container'
import MainStackNavigator from './navigation/MainStackNavigator'

import 'intl'
import { Platform } from 'react-native'
import 'intl/locale-data/jsonp/en'

if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === 'function') {
    ;(Intl as any).__disableRegExpRestore()
  }
}

export default function App() {
  return (
    <Container>
      <StatusBar />
      <MainStackNavigator />
    </Container>
  )
}
