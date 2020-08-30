import React from 'react'
import { Image } from 'react-native'
import { shallow } from 'enzyme'
import Icons from '../Icons'

const Tatts = (
  <Image
    style={{ flex: 1 }}
    resizeMode='contain'
    source={require('../../assets/goldSat.png')}
  />
)
const Oz = (
  <Image
    style={{ flex: 1 }}
    resizeMode='contain'
    source={require('../../assets/ozLotto.png')}
  />
)
const Power = (
  <Image
    style={{ flex: 1 }}
    resizeMode='contain'
    source={require('../../assets/powerBall.png')}
  />
)

describe('Icons', () => {
  it('Should correctly render the logo associated with the given key', () => {
    const wrapper1 = shallow(<Icons id='TattsLotto' />)
    expect(wrapper1.matchesElement(Tatts)).toBe(true)
    const wrapper2 = shallow(<Icons id='OzLotto' />)
    expect(wrapper2.matchesElement(Oz)).toBe(true)
    const wrapper3 = shallow(<Icons id='Powerball' />)
    expect(wrapper3.matchesElement(Power)).toBe(true)
  })
})
