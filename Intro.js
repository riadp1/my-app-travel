import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"





const Intro = () => {

    const nav = useNavigation(); 

   useLayoutEffect(()=> {
    nav.setOptions(
        {headerShown: false,}
    )
   },[])


   


  return (
    <ImageBackground style={{width:"100%",height:"100%", resizeMode:"cover"}}  source={require('../assets/intro.jpg')}>

            <View style={styles.container} >
                <Text style={{color:"#fff",fontSize:34}}>Explore <Text style={{fontWeight:"800"}}>Algeria</Text></Text>
                <Text onPress={()=> nav.navigate('splash')} style={styles.Text}><AntDesign name='right' size={30}  color={"#fff"}/></Text>
             
            </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        position:"absolute",
        bottom:147,
        alignItems:"center",
        
        width:"100%",
       
        

    },
    Text:{
        color:"#fff",
        backgroundColor:"#F1C644" ,
        top:40,
        right:40,
        textAlign:"center",
       justifyContent:"center",
        borderRadius:50,
        position:"absolute",
        width:60,
        height:60,
        marginTop:43,
        paddingTop:15
        
    }

  




})


export default Intro