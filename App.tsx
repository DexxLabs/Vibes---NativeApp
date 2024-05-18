import { SafeAreaView, StatusBar, StyleSheet, Text, View,useColorScheme} from 'react-native'
import React from 'react'
import HeaderFile from './resources/HeaderFile'
import FlatCards from './resources/FlatCards'

export default function App() {
  const mode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={mode?styles.backgroundDark : styles.background}>
      <StatusBar backgroundColor={mode?'#141414' : '#ffffff'}/>
        <HeaderFile/>
        <FlatCards/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundDark:{
    backgroundColor:'#141414',
    flex:1
  },
  background:{
    backgroundColor: '#ffffff',
    flex:1
  }

})