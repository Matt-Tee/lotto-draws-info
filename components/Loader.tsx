import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { activeColor } from '../constants'

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size='large' color={activeColor} />
    </View>
  )
}

export default Loader
