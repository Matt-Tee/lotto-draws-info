import React from 'react'
import { draw } from '../types/drawTypes'
import Container from '../components/Container'
import Row from '../components/Row'
import { Text } from 'react-native'

const DrawScreen = ({ route }: any) => {
  const draw: draw = route.params.draw
  return (
    <Container>
      <Row>
        <Text>{draw.DrawDisplayName}</Text>
      </Row>
      <Row>
        <Text>{draw.DrawDisplayName}</Text>
      </Row>
      <Row>
        <Text>{draw.DrawDisplayName}</Text>
      </Row>
      <Row>
        <Text>{draw.DrawDisplayName}</Text>
      </Row>
      <Row>
        <Text>{draw.DrawDisplayName}</Text>
      </Row>
    </Container>
  )
}

export default DrawScreen
