import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const Searchbar = () => {
  return (
    <View style={{width:327, 
    height:48,
    backgroundColor:"#D2D5E7",
    borderRadius:8,
    borderColor:"#7F839E",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
}} >
         <TextInput 
        
        onChangeText={text => setSearchText(text)}
       
        placeholder="Where do you want to go ?"
      />
      <AntDesign name='search1' size={20} color="#30323D"/>

      
    </View>
      
   
  )
}

export default Searchbar