import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/Intro';
import SplashIcon from './screens/SplashIcon';
import LoginScreen from './screens/LoginScreen';
import Explorer from './screens/Explorer';
import DetailsPlace from './screens/DetailsPlace';




const Stack = createNativeStackNavigator();





export default function App() {

 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="splash" component={SplashIcon} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="exp" component={Explorer}  options={{ headerShown: false }} />
      <Stack.Screen name="details" component={DetailsPlace}  options={{ headerShown: false }} />
      
           
         
       
    </Stack.Navigator>
  </NavigationContainer>
  );
}


