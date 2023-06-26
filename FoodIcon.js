import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'


const FoodIcon = ({setType,type,title}) => {

  const [activeIcon, setActiveIcon] = useState(null);
  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    
    <View style={styles.categories}>

        <View >
        <TouchableOpacity key={'activities'}  style={[
      styles.category,
      activeIcon === 'icon1' && styles.activeIconButton,
    ]} 
    onPress={() => handleIconPress('icon1')}>
            <Ionicons  name='fast-food-outline' size={20} color="white" />
           
        </TouchableOpacity>
        <Text style={{marginTop:14,fontSize:15,textAlign:"center",
        fontWeight:"700"}}  >{title}</Text>
        </View>

      
    </View>
   


  )
}


const styles = StyleSheet.create({
   

    Category:{

    color:"#fff",
    width:50,
    height:50,
    paddingTop:10,
    backgroundColor:"#30323D",
    textAlign:"center",
    justifyContent:"center",
    borderRadius:50
    
    },
 

  
activeIconButton: {
    backgroundColor: '#1E88E5',
  },
category:{
    backgroundColor:"#30323D",
    width:56,
    height:56,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8
    
    
},
});

export default FoodIcon