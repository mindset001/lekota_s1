import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


import Beauty from '../components/Beauty/Beauty'
import Landing from '../components/Beauty/Landing'
import HomeTab from '../tab/HomeTab';
import Chat from '../components/chat/chat'
import Call from '../components/chat/call'
import Description from '../components/Beauty/Description';
import Profile from '../components/provider/Profile'
import Notification from '../components/provider/Notification'


const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
       
       <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Beauty" component={Beauty} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: Platform.OS === 'ios' ? true : false }}/>
        <Stack.Screen name="Description" component={Description} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Provider" component={Profile} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Call" component={Call} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
      </Stack.Navigator>
    );
  }
  
  export default HomeStack;