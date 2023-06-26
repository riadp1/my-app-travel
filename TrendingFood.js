import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const TrendingFood = ({title,imagesrc,location_string, dataH }) => {

    const nav = useNavigation(); 


    return (
         <TouchableOpacity onPress={()=> nav.navigate('details',{ dataH})} style={{width:230,}}>


                
        <View style={styles.item}>
       <Image style={{height:100,width:210,marginTop:1, resizeMode:"cover"}}   source={{uri:imagesrc}}/>
       <View style={styles.name}>
           <Text style={{fontSize:15,fontWeight:"700"}}>{title} </Text>
           <Text style={{fontSize:8,fontWeight:"700",opacity:0.5}}>{location_string}</Text>
       </View>

       <View style={styles.rate}>
           <Text style={{ fontSize:12,textAlign:"center"}}></Text>
           <Text style={{fontSize:8,textAlign:"center",textDecorationLine:"underline"}}>See more</Text>

       </View>
       <View style={{position:'absolute', top:100,left:10}}><AirbnbRating  showRating={true}  size={10} count={5} reviews={false}/></View>
       



   </View>
   </TouchableOpacity>
      
      )
}


const styles = StyleSheet.create({
    container: {
    marginTop:30
      
    
    },
    items:{
       
        marginTop:10,
        flexDirection:"row"
    },
    item:{
        width:210,
        backgroundColor:'white',
        borderRadius:8,
        overflow:"hidden"
    },
    name:{
        marginTop:6,
        marginLeft:10
    },
    rate:{
        flexDirection:"row",
        width:198,
        justifyContent:"space-between",
        marginTop:15,
        marginLeft:10,
        paddingRight:10,
        alignItems:'center'
    }

})

export default TrendingFood