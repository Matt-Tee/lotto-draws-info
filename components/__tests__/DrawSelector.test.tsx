import React from 'react'
import { shallow } from 'enzyme'
import DrawSelector from '../DrawSelector'
import { Image } from 'react-native'
import Icons from '../Icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const mock = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return { navigate: mock }
    },
  }
})

const testDraw = {
  Div1Amount: 20000000,
  DrawCloseDateTimeUTC: '2020-09-05T09:35:00',
  DrawCountDownTimerSeconds: 520944,
  DrawDate: '2020-09-05T00:00:00',
  DrawDisplayName: 'Sat Gold Lotto $20,000,000',
  DrawEndSellDateTimeUTC: '2020-09-05T09:30:00',
  DrawLogoUrl:
    'http://media.tatts.com/TattsServices/Lotto/Products/GoldLottoSat_v1.png',
  DrawNumber: 4083,
  DrawType: 'Superdraw',
  IsDiv1Estimated: false,
  IsDiv1Unknown: false,
  ProductId: 'TattsLotto',
}

describe('DrawSelector', () => {
  it('Should render an Icon component', () => {
    const wrapper = shallow(<DrawSelector draw={testDraw} />)

    const icons = wrapper.find(Icons)
    expect(icons.length).toBe(1)
  })
  it('Should be pressable', () => {
    const wrapper = shallow(<DrawSelector draw={testDraw} />)
    const handler = wrapper.find(TouchableOpacity)
    console.log(handler.props)
    wrapper.simulate('press')
    expect(mock).toHaveBeenCalledTimes(1)
  })
})
