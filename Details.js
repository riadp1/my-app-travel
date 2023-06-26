import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

const Details = ({details,ranking}) => {



  return (
    <View style={styles.container} >

        
        <View style={styles.textD}>
            <Text style={{fontSize:14,fontWeight:"700",marginBottom:6}}>On the place</Text>
            <Text>{details}</Text>
        </View>


        <View style={styles.people}>
        <Text>What people think</Text>
            <View style={styles.profile}>
                <View style={styles.avatar}>
                    <Image style={{width:45,height:45,borderRadius:50}}  source={require('../assets/avatar3.jpg')}  />
                <Text style={{fontSize:12,fontWeight:"700",marginBottom:6}}>morad khan</Text>
                
                </View>
                
            </View>

        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
     paddingLeft:25,
     marginTop:29
      
    },

    people:{

       
        
        marginTop:15
    },

    profile:{
        backgroundColor:"#fff",
        elevation:10,
        width:327,
        height:150,
        marginTop:17,
        paddingLeft:24,
        paddingTop:10,
        borderRadius:8
    },
    avatar:{
        flexDirection:"row",
        width:120,
        alignItems:"center",
        justifyContent:"space-between"
        
    }

})

export default Details