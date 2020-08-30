import React, { FunctionComponent } from 'react'
import { Image } from 'react-native'

const iconMap: { [key: string]: any } = {
  TattsLotto: require('../assets/goldSat.png'),
  OzLotto: require('../assets/ozLotto.png'),
  Powerball: require('../assets/powerBall.png'),
}

type IconProps = {
  id: string
}

const Icons: FunctionComponent<IconProps> = ({ id }) => {
  return <Image style={{ flex: 1 }} resizeMode='contain' source={iconMap[id]} />
}

export default Icons
