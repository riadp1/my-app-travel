import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Trend = ({title,imagesrc,location_string,data,rate}) => {

    const nav =useNavigation();
    return (
        
    
    
            <View style={{width:230}}>


                
                 <TouchableOpacity onPress={()=>nav.navigate('details',{ data})} style={styles.item}>
                <Image style={{height:100,width:210,marginTop:1, resizeMode:"cover"}}   source={{uri:imagesrc}}/>
                <View style={styles.name}>
                    <Text style={{fontSize:15,fontWeight:"700",height:30}}>{title} </Text>
                    <Text style={{fontSize:8,fontWeight:"700",opacity:0.5}}>{location_string}</Text>
                </View>

                <View style={styles.rate}>
                    <Text style={{ fontSize:12,textAlign:"center"}}></Text>
                    <Text style={{fontSize:8,textAlign:"center",textDecorationLine:"underline"}}>See more</Text>

                </View>
                <View style={{position:'absolute', top:100,left:10}}><AirbnbRating defaultRating={rate}  showRating={true}  size={10} count={5} reviews={false}/></View>
                



            </TouchableOpacity>
            </View>
               
    
            
           
          
       
      )
}


const styles = StyleSheet.create({
    container: {
   
      
    
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

export default Trend