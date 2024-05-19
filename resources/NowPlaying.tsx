import { Image, StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'


export default function HeaderFile() {
  const mode = useColorScheme() === 'dark'
  return (
    <View>
    <View>
      <Text style={mode?styles.headerTextDark  :  styles.headerText}>Now Playing</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.topcontainer}>
            <View style={styles.imageElement}>
            <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b273a9da992c2ef398245027d654'}} style={styles.imagehandler}/>
            </View>

            <View style={styles.textElement}>
                <Text style={mode?styles.songnamedark:styles.songname}>Feel It (From “Invincible”)</Text>
                <Text style={mode?styles.artistnamedark:styles.artistname}>d4vd</Text>
            </View>

            <View style= {styles.playbuttoncontainer}>
                <Image source={mode?{uri: 'https://img.icons8.com/sf-black-filled/64/000000/play.png'}:{uri: 'https://img.icons8.com/sf-black-filled/64/FFFFFF/play.png'}} style={styles.playbutton}/>
            </View>
        </View>
    </View>
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
      marginTop:20
    },
    container:{
        
        backgroundColor: '#40A578',
        height: 'auto',
        marginHorizontal:12,
        borderRadius: 12,
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
    topcontainer:{
            flexDirection: 'row',
            alignItems: 'center'
            
            
    },
    imagehandler:{
        height:40,
        width:40
    },
    imageElement:{
        margin:12,
        

    },
    textElement:{
       
        
    },
    songname:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    artistname:{
        color: '#fff',
        fontSize:12
    },
    songnamedark:{
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    artistnamedark:{
        color: '#000',
        fontSize:12
    },

    playbuttoncontainer:{
        
            flexBasis: 130,
            flexDirection: 'row-reverse',
            
            

    },
    playbutton:{
            height: 30,
            width:30,
            
            
    }
})