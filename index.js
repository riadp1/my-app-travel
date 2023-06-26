import axios from 'axios';



export const getPlacesData= async(type)=>{
  try{
    const {data:{data}}= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    {params: {
      bl_latitude: '36.6833',
      tr_latitude: '36.8',
      bl_longitude: '2.9',
      tr_longitude: '3.1833',
    
      limit: '4',
      currency: 'USD',
      open_now: 'false',
      lunit: 'km',
      lang: 'FR'
  },

  headers: {
    'X-RapidAPI-Key': '02ef72264bmsh9f6911a48a78298p1cb6d9jsn86786cff51a4',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
  ,}
  ,)
  return data;}
  catch(error){
    return null
  }

}


















