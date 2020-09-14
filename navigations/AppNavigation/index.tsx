import {NavigationContainer, LinkingOptions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React, {useRef} from 'react'
import {Platform} from 'react-native'

import routes from './routes'
import theme from './theme'

const {Navigator, Screen} = createStackNavigator()

const isNative = Platform.OS !== 'web'

const linking: LinkingOptions = {
  prefixes: ['snap://'],
  config: {
    screens: {
      ...routes,
    },
  },
}

export interface AppNavigationProps {
  children?: any
}

export {Screen}

export default function AppNavigation({children}: AppNavigationProps) {
  const navigationRef = useRef(null)

  return (
    <NavigationContainer ref={navigationRef} theme={theme} linking={isNative ? linking : undefined}>
      <Navigator
        screenOptions={{
          animationEnabled: false,
        }}
        headerMode="none">
        {children}
      </Navigator>
    </NavigationContainer>
  )
}
