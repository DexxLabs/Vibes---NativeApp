import { Image, ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

export default function coListen() {
  const mode = useColorScheme() === 'dark'
  return (
    <View style={styles.section}>
    <View>
      <Text style={mode?styles.headerTextDark  :  styles.headerText}>Recently Played</Text>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/7f/77/7b/7f777b107d9634495724272e5f99ba97.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Metro Boomin</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/ff/37/e4/ff37e444d88b6f48c024647354a1d655.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Annihilate</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/9a/77/e4/9a77e464bbf0aa48247ba3601a87164b.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>SZA</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/736x/83/e2/39/83e239293b04c0b9a856c59faeb035cc.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>Arctic Monkeys</Text>
      </View>

      <View style={styles.roundimage}>
        <Image source={{uri:'https://i.pinimg.com/564x/75/ee/f4/75eef4b3fd01d0ae20f4f44864299736.jpg'}} style={styles.imageHandler}/>
        <Text style={mode?styles.bottomtext :styles.bottomtextlight}>The Neighbourhood</Text>
      </View>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText:{
    fontFamily: 'Poppins Light',
    fontWeight: '800',
    fontSize: 21,
    color: '#000',
    padding: 12,
    marginTop:20,
    
},
headerTextDark:{
  fontFamily: 'Poppins Light',
  fontWeight: '800',
  fontSize: 21,
  color: '#fff',
  padding: 12,
  marginTop:20,
  
},
container:{
    marginLeft: 8 
},
section:{},

roundimage:{
  marginHorizontal:8,
  alignItems: 'center',
  
  
},
bottomtext:{
  fontWeight: '500',
  color: '#fff',
  marginHorizontal:4
},
bottomtextlight:{
  fontWeight: '500',
  color: '#000'
},
imageHandler:{
  height: 150,
  width:150,
  borderRadius: 10,
  marginBottom: 5,
  marginTop: 5
}

})