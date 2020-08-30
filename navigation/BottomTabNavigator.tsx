import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Results from '../screens/Results'
import Calendar from '../assets/svgs/calendar.svg'
import { activeColor } from '../constants'
import UpComing from '../screens/UpComing'
import XSquare from '../assets/svgs/x-square.svg'

const Tabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName='UpComing'
      tabBarOptions={{
        activeTintColor: activeColor,
      }}
    >
      <Tabs.Screen
        name='UpComing'
        component={UpComing}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Calendar color={color} scale={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='QRScan'
        component={Results}
        options={{
          tabBarLabel: 'QR Scan',
          tabBarIcon: ({ color, size }) => (
            <XSquare color={color} scale={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

export default BottomTabNavigator
