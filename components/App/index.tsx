import evaLightTheme from '@eva-design/eva/themes/light'
import {ApplicationProvider} from '@ui-kitten/components'
import {StatusBar} from 'expo-status-bar'
import React, {ReactNode} from 'react'
import {ViewProps, Platform, SafeAreaView, StyleSheet} from 'react-native'

import mapping from './mapping.json'
import theme from './theme.json'

const isWeb = Platform.OS === 'web'

const NextNprogress: any = isWeb ? require('nextjs-progressbar').default : null

export interface AppProps extends ViewProps {
  children: ReactNode
}

export default function App({children}: AppProps) {
  return (
    <ApplicationProvider mapping={mapping} theme={{...evaLightTheme, ...theme}}>
      <SafeAreaView style={styles.safeAreaView}>
        {children}
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
        {isWeb && (
          <NextNprogress
            color={theme['color-primary-500']}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
        )}
      </SafeAreaView>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
})
