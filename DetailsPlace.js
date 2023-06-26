import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Details from '../component/Details';
import Map from '../component/Map';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';


const DetailsPlace = ({route}) => {
  const nav =useNavigation();
  const [change,setchange]= useState('first')
  const {data} = route.params;
  console.log(data)
  const images =[
    require('../assets/boys.jpg'),
    require('../assets/boys.jpg'),
    require('../assets/boys.jpg'),
    
  ]

   
    return (
        <View style={styles.container}>
          <View style={styles.image}>
             <Image style={{width:"100%",height:"100%",resizeMode:"cover"}}  source={{uri:data?.photo?.images?.original?.url?

                data?.photo?.images?.original?.url :
              'https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png'

}}
          
          />
          </View>
          <View style={styles.placename}>

            <Text style={{fontSize:25,fontWeight:"700"}}>{data?.name}</Text>
            <Text style={{fontSize:17,fontWeight:"600",opacity:0.3}}>{data?.location_string}</Text>

          </View>

          <View style={styles.drr}>

            <View>

               <Text onPress={()=> setchange("first")} style={{fontSize:13,fontWeight:"700"}}>Details</Text>
               <Text style={{backgroundColor:"black",height:3,top:8}}></Text>
            </View>
           <View>
            <Text onPress={()=> setchange("second")}  style={{fontSize:13,fontWeight:"700"}}>Map</Text>
            
            </View>
            


            <Text onPress={()=> setchange("")} style={{fontSize:13,fontWeight:"700"}}>Reviews</Text>

          </View>
          <View style={styles.details}>

          
            {change === 'first' && <Details details={data?.description} /> }
            {change === 'second' && <Map/>  }
            
            

          </View>


         
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
     
      
    },

    image:{
      height:200
    },

    placename:{
      paddingTop:11,
      paddingLeft:24,
      height:150,
      backgroundColor:"rgba(210, 213, 231, 0.3)",
    
     
      
    },
    drr:{
      paddingLeft:42,
      paddingRight:42,
      height:42,
      alignItems:"center",
      width:"100%",
      justifyContent:"space-between",
      flexDirection:"row",
      backgroundColor:"rgba(210, 213, 231, 0.4)",
      
      
    }
    
  });

export default DetailsPlace