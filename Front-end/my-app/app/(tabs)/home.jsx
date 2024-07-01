import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'

export default function home() {

  return (
    <View style={styles.main}>
      <Header></Header>
      <Text>home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    height: '100%',
    marginTop: 48,
  }
})