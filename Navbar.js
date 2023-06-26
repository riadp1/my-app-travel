import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Octicons from "react-native-vector-icons/Octicons"
import AntDesign from 'react-native-vector-icons/AntDesign'


function Navbar() {
  return (
    <View style={styles.container}>
    
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.tab}>
         <Feather name='compass' size={24} color='#CCCCCC' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Octicons name='person' size={24} color='#cccccc'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Feather name='map-pin' size={24} color="#cccccc"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <AntDesign name='setting' size={24} color="#cccccc"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   width:"100%",
   height:"100%"
    
  },
  navbar: {
    position:"absolute",
    
   
  
    
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#30323D',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:"#fff"
  },
});

export default Navbar;
