import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View,useColorScheme} from 'react-native'
import React from 'react'
import HeaderFile from './resources/HeaderFile'
import FlatCards from './resources/FlatCards'
import ListenTogether from './resources/ListenTogether'
import RecentlyPlayed from './resources/RecentlyPlayed'
import NavigationBar from './resources/NavigationBar'
import NowPlaying from './resources/NowPlaying'

export default function App() {
  const mode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={mode?styles.backgroundDark : styles.background}>
      <StatusBar backgroundColor={mode?'#141414' : '#ffffff'}/>
      <ScrollView>
        <HeaderFile/>
        <FlatCards/>
        <ListenTogether/>
        <NowPlaying/>
        <RecentlyPlayed/>
        
        </ScrollView>
        <NavigationBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundDark:{
    backgroundColor:'#141414',
    flex:1
  },
  background:{
    backgroundColor: '#FFFFFF',
    flex:1
  }

})