import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo"
import  AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';




const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigation(); 

  return (
    
    <ImageBackground   style={styles.container}>

      <View style={{position:"absolute",top:102, width:76,height:124}}>
        <Image source={require('../assets/arrow.png')} animation="fadeIn"
           style={{ width:76,height:124,resizeMode:'contain',
      
       
       justifyContent:"center",
       padding:30,
       

       }} />
       <Text style={{textAlign:"center",fontSize:18, fontWeight:"700",}}>SIYAHA</Text>
       
       </View>

       
  <ImageBackground  style={styles.contain}>
    <Text style={{color:"#24262D",fontWeight:"700",fontSize:25,marginBottom:50}}>New here ? Sign up</Text>
    <View style={styles.signup}>
      <Text  onPress={()=> nav.navigate('exp')} style={styles.signtext}><AntDesign size={20} color='#EA4335' name='google' /> Sigh up with Google</Text>
      <Text style={styles.signtext}><Entypo size={20} color='#1877F2' name='facebook' /> Sign up with Facebook</Text>
    </View>
    
    <Text style={styles.term}>By Signing up, you agree tp Siyaha's <Text style={{textDecorationLine:"underline"}}>Terms of use </Text> and <Text style={{textDecorationLine:"underline"}}> Privacy Plolicy</Text></Text>
  </ImageBackground >



    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
   
    
  
  },

  contain:{
    alignItems:"center",
    top:240,
    width:326,
    height:428,
    bottom:146,
    paddingTop:64,
    paddingLeft:16,
    paddingRight:16


  },
  signup:{
    alignItems:"center",
    width:294,
    
  },
  signtext:{
   backgroundColor:"#fff",
   width:294,
   height:44,
   textAlign:'center',
   marginTop:19,
   paddingTop:10,
   elevation:1,
   borderRadius:8
   
  
   
  },
  term:{
    color:"#24262D",
    textAlign:"center",
    padding:20,
    top:38,
    fontSize:14,
    lineHeight:20
  }
});

export default LoginScreen;