import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Headline} from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Headline>Snap API</Headline>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
