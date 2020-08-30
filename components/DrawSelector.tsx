import React, { FunctionComponent } from 'react'
import { Dimensions, Image } from 'react-native'
import { draw } from '../types/drawTypes'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icons from './Icons'

type selectorProps = {
  draw: draw
}

const width: number = Dimensions.get('window').width

const DrawSelector: FunctionComponent<selectorProps> = ({ draw }) => {
  const navigation = useNavigation()

  const handleSelect = () => {
    navigation.navigate('Draw Details', { draw: draw })
  }

  console.log(draw.ProductId)

  return (
    <TouchableOpacity
      onPress={() => {
        handleSelect()
      }}
      style={{
        width: width / 1.5,
        height: 200,
        borderRadius: 10,
        margin: 7,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icons id={draw.ProductId} />
    </TouchableOpacity>
  )
}

export default DrawSelector
