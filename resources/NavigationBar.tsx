import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'

export default function NavigationBar() {
    const mode = useColorScheme() === 'dark'
  return (
    <View style={styles.navbar}>
      <View style={styles.icons}>
        <Image source={{uri:'https://img.icons8.com/ios-filled/50/FFFFFF/home.png'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Home</Text>
      </View>

      <View style={styles.icons}>
        <Image source={{uri:'https://img.icons8.com/ios/50/FFFFFF/search--v1.png'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Search</Text>
      </View>

      <View style={styles.icons}>
        <Image source={{uri:'https://img.icons8.com/windows/32/FFFFFF/administrator-male--v1.png'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Profile</Text>
      </View>

      <View style={styles.icons}>
        <Image source={{uri:'https://img.icons8.com/ios-glyphs/30/FFFFFF/settings--v1.png'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Settings</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
        navbar:{
            backgroundColor: '#0f0f0f',
            borderTopColor: '#40A578',
            borderTopWidth:2,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        icons:{
            marginTop: 3,
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageHandler:{
            height: 20,
            width: 20

        },

        bottomtext:{
            color: '#fff',
            fontSize:10,
            fontWeight: 'bold'
        },

        bottomtextlight:{
          color: '#fff',
          fontSize:10,
          fontWeight: 'bold'
            
        }

})