import React, { FunctionComponent } from 'react'
import { Dimensions, Image } from 'react-native'
import { draw } from '../types/drawTypes'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

type selectorProps = {
  draw: draw
}

const width: number = Dimensions.get('window').width

const DrawSelector: FunctionComponent<selectorProps> = ({ draw }) => {
  const navigation = useNavigation()

  const handleSelect = () => {
    navigation.navigate('Draw Details', { draw: draw })
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleSelect()
      }}
      style={{
        width,
        height: 200,
      }}
    ></TouchableOpacity>
  )
}

export default DrawSelector
