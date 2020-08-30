import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Results from '../screens/Results'
import HomeIcon from '../assets/svgs/home.svg'
import Home from '../screens/Home'
import { activeColor } from '../constants'


const Tabs = createBottomTabNavigator()

const BottomTabNavigator = ()=> {

    return(
        <NavigationContainer>
            <Tabs.Navigator 
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: activeColor
                }}
            >
                <Tabs.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size}) => <HomeIcon color={color} scale={size}/>
                }}
                />
                 <Tabs.Screen name="Results" component={Results} 
                options={{
                    tabBarLabel: "Results",
                    tabBarIcon: ({ color, size}) => <HomeIcon color={color} scale={size}/>
                }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator