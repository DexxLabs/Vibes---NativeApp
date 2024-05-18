import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderFile from './resources/HeaderFile'

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff',flex:1}}>
      <StatusBar backgroundColor={'#ffffff'}/>
        <HeaderFile/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})