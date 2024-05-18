import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'


export default function HeaderFile() {
  const mode = useColorScheme() === 'dark'
  return (
    <View>
      <Text style={mode?styles.headerTextDark  :  styles.headerText}>Welcome to Vibes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
        fontFamily: 'Poppins Light',
        fontWeight: '800',
        fontSize: 22,
        color: '#000',
        padding: 12,
        marginTop:20,
        shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
    headerTextDark:{
      fontFamily: 'Poppins Light',
      fontWeight: '800',
      fontSize: 22,
      color: '#fff',
      padding: 12,
      marginTop:20
    }

})