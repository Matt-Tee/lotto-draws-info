import React, { FunctionComponent } from 'react'
import { View, Text } from 'react-native'
import { draw } from '../types/drawTypes'

type selectorProps = {
  draw: draw
}

const DrawSelector = (props: selectorProps) => {
  return (
    <View>
      <Text>{props.draw.DrawDisplayName}</Text>
    </View>
  )
}

export default DrawSelector
