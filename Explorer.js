import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation'
import Searchbar from '../component/Searchbar'
import { ScrollView } from 'react-native'
import TrendingFood from '../component/TrendingFood'
import Trend from '../component/Trending'
import { getPlacesData } from '../API'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"


const Explorer = () => {

   
    const[mainData,setData]=useState([])
    const [type,setType]=useState("")
    const [trend,setTrend]=useState('Trending Activities')
    const [activeIcon, setActiveIcon] = useState('icon1');
  
    

      useEffect(()=>{
        getPlacesData(type).then((data)=> {
          setData(data)
        })
      },[type])


      const PressAtr = () => {
        setType("attractions");
        setActiveIcon('icon1');
        setTrend('Trending Activities')
      };

      const pressResto = () => {
        setType("restaurants");
        setActiveIcon("icon3");
        setTrend('Trending Food')
      };

      const pressHotel = () => {
        setType("hotels");
        setActiveIcon("icon2");
        setTrend('Trending Hotels')
      };


     

 




  return (
    <View style={styles.container}>
       <View style={styles.hey}>
        <Text style={{fontSize:18,fontWeight:"700"}}  >hey , Riad</Text>
        <Text style={{fontSize:16,}} >where To Go</Text>
      </View>


      <View style={styles.top} >
      <View style={{flexDirection:"row", justifyContent:"space-between",width:250,marginBottom:15}}>

        {/* Icon category */}

              <View style={styles.categories}>

        <View>
        <TouchableOpacity key={'activities'}  style={[
        styles.category,
        activeIcon === 'icon1' && styles.activeIconButton,
        ]} 
        onPress={PressAtr}>
            <Foundation  name='mountains' size={20} color="white" />
          
        </TouchableOpacity>
        <Text style={{marginTop:14,fontSize:15,
        fontWeight:"700"}}  >Activities</Text>
        </View>


        </View>
      


         
      
                <View style={styles.categories}>

          <View >
          <TouchableOpacity onPress={pressHotel}
           key={'hotel'}  style={[
          styles.category,
          activeIcon === 'icon2' && styles.activeIconButton,
          ]} 
           >
              <FontAwesome5  name='hotel' size={20} color="white" />
            
          </TouchableOpacity>
          <Text style={{marginTop:14,fontSize:15,textAlign:"center",
          fontWeight:"700"}}  >Hotels</Text>
          </View>


          </View>
   



        <View style={styles.categories}>

        <View >
        <TouchableOpacity onPress={pressResto}
         key={'Restaurants'}  style={[
        styles.category,
        activeIcon === 'icon3' && styles.activeIconButton,
        ]} 
        >
            <Ionicons  name='fast-food-outline' size={20} color="white" />
          
        </TouchableOpacity >
        <Text style={{marginTop:14,fontSize:15,textAlign:"center",
        fontWeight:"700"}}  >Food</Text>
        </View>


        </View>


  

               
        

      </View>
      <Searchbar/>
      </View>


      <ScrollView  style={{marginLeft:26, marginTop:50}}>



      <View style={{marginBottom:10}}>
                <Text style={{fontSize:17,fontWeight:"700"}}>{trend}</Text>
                <Text style={{fontWeight:"400"}}>People are loving these Places</Text>
            </View>

                <ScrollView contentContainerStyle={{justifyContent:'space-between',}} horizontal style={styles.trends}>
              <>
              {mainData?.map((data,i)=>(
                
                <Trend key={i}
                       imagesrc={data?.photo?.images?.original?.url?

                        data?.photo?.images?.original?.url :
                        'https://www.elegantthemes.com/blog/wp-content/uploads/2020/07/000-HTTP-Error-400.png'     
                      
                      }
                       title={data?.name}
                       rate={data?.rating}
                       data={data}
                       location_string={data?.location_string}
                       setype={setType}
                       type={type}
                       ranking={data?.ranking}
                />


                ))}
                

                </>
            

            </ScrollView>



            <View style={{marginBottom:10,marginTop:20}}>
                <Text style={{fontSize:17,fontWeight:"700"}}>Trending Food</Text>
                <Text style={{fontWeight:"400"}}>People are loving these Foods</Text>
            </View>

                <ScrollView contentContainerStyle={{justifyContent:'space-between',}} horizontal style={styles.trends}>
             
              
                
                <TrendingFood  />


                
                

               
            

            </ScrollView>
      
      </ScrollView>  
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    
    },

    hey:{
        marginTop:60,
        marginLeft:23,
        height:56
    },
    top:{
      
       justifyContent:"center",
        alignItems:"center",
        marginTop:10,

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
    trends:{
        
        
    }

})


export default Explorer
