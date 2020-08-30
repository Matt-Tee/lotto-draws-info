import React from 'react'
import { draw } from '../types/drawTypes'
import Container from '../components/Container'
import { Text, View } from 'react-native'
import moment from 'moment'
import Padder from '../components/Padder'
import Icons from '../components/Icons'

const DrawScreen = ({ route }: any) => {
  const draw: draw = route.params.draw
  return (
    <Container>
      <View
        style={{
          paddingHorizontal: 17,
        }}
      >
        <Padder />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {draw.DrawDisplayName.replace(/\$.*/, '')}
        </Text>
        <Text>{draw.DrawDisplayName}</Text>
        <Padder />

        <Text>
          Draw closes at:{' '}
          {moment(draw.DrawCloseDateTimeUTC)
            .add(10, 'hours')
            .format('h:mma on dddd [the] Do [of] MMMM YYYY [AEST]')}
        </Text>
        <Padder />

        <Text>
          Date of Draw:{' '}
          {moment(draw.DrawDate)
            .add(10, 'hours')
            .format('dddd [the] Do [of] MMMM YYYY')}
        </Text>
        <Padder />

        <Text>Draw Number: {draw.DrawNumber}</Text>
        <Padder />

        {draw.IsDiv1Unknown ? (
          <Text>Jackpot value for this draw is not know at this time.</Text>
        ) : (
          <View>
            <Text>
              Jackpot Value: $
              {new Intl.NumberFormat('de-DE', {
                // style: 'currency',
                // currency: 'AUD',
              }).format(draw.Div1Amount)}
            </Text>
            {!!draw.IsDiv1Estimated && (
              <Text>This amount is an estimate. Final value may differ.</Text>
            )}
          </View>
        )}
        <Padder />
        <Text>
          Only{' '}
          {moment
            .duration(draw.DrawCountDownTimerSeconds, 'seconds')
            .humanize()}{' '}
          left to get a ticket!
        </Text>
        <Padder />

        <View style={{ alignItems: 'center' }}>
          <View style={{ height: 100 }}>
            <Icons id={draw.ProductId} />
          </View>
        </View>
      </View>
    </Container>
  )
}

export default DrawScreen
