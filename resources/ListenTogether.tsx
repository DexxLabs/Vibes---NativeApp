import { Image, ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function coListen() {
  const mode = useColorScheme() === 'dark'
  return (
    <View style={styles.section}>
    <View>
      <Text style={mode?styles.headerTextDark  :  styles.headerText}>Listen Together</Text>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/736x/f8/27/a5/f827a554169e043be711e41bd69405dc.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Raven</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/57/c1/95/57c195ff8b9d3528a309ca1c0629fd9b.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Tom</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/736x/1e/4f/d4/1e4fd4db1e397dc71eb71de501e11077.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Ice</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/736x/7b/4c/6d/7b4c6d9638dd629705791d4f9cbe597b.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Luffy</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/18/55/b8/1855b812bef7e18f1a7141b999212c3f.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Deadpool</Text>
      </View>

    </ScrollView>
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
    
},
headerTextDark:{
  fontFamily: 'Poppins Light',
  fontWeight: '800',
  fontSize: 22,
  color: '#fff',
  padding: 12,
  marginTop:20,
  
},
container:{},
section:{},
roundimage:{
  marginHorizontal:12,
  alignItems: 'center',
  shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  
},
bottomtext:{
  fontWeight: '500',
  color: '#fff'
},
bottomtextlight:{
  fontWeight: '500',
  color: '#000'
},
imageHandler:{
  height: 70,
  width:70,
  borderRadius: 40,
  marginBottom: 5,
  marginTop: 5,
  borderColor: '#40A578',
  borderWidth : 2.5,
  
}

})