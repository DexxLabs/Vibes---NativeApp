import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

export default function card() {
  const mode = useColorScheme() === 'dark'
  return (
    <View style={styles.container}>
      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>Liked Songs</Text>
      </View>

      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>Billie Eilish</Text>
      </View>

      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://i1.sndcdn.com/artworks-eiy4IIxbt7pP-0-t500x500.jpg'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>Chase Atlantic</Text>
      </View>

      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>The Weekend</Text>
      </View>

      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gZII9IYjTV8f1K8wuNbqoOkcEdslidMqwk2LfebdqA&s'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>JVKE</Text>
      </View>

      <View style={mode ?styles.cardDark : styles.card}>
        <Image source={{uri:'https://wknc.org/wp-content/uploads/2022/05/moonlight.jpeg'}} style={styles.imagecard}/>
        <Text style={mode? styles.cardtextdark : styles.cardtext}>Dhruv</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 1,
    marginTop: 6
  },
  card:{
      flexDirection: 'row',
      flexBasis: 170,
      backgroundColor: '#40A578',
      marginBottom: 8,
      height: 50,
      borderRadius: 12,
      shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
      
      

  },
  cardDark:{
    flexDirection: 'row',
    flexBasis: 170,
    backgroundColor: '#ffffff',
    
    marginBottom: 8,
    height: 50,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    

},
  cardtext:{
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '700',
    margin: 6,
    textAlignVertical: 'center',
    paddingLeft:5
  },
  cardtextdark:{
    color: '#000',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '700',
    margin: 6,
    textAlignVertical: 'center',
    paddingLeft:5
  },

  imagecard:{
      height: 50,
      width:50,
      borderTopLeftRadius:12,
      borderBottomLeftRadius:12,
      
      flexBasis: 50
  }
})