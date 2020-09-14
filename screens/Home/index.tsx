import {Text, Layout} from '@ui-kitten/components'
import React from 'react'
import {StyleSheet} from 'react-native'

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text}>Snap API</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
