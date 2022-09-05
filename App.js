import { Platform, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './auths/login'
import Signup from './auths/signup'
import HomeDrawer from './stack/HomeDrawer';
import { Provider } from 'react-redux';
import { store } from './app/store';
import FlashMessage from "react-native-flash-message";
import 'react-native-gesture-handler';
import Beauty from './components/Beauty/Beauty';
import Landing from './components/Beauty/Landing';
import Description from './components/Beauty/Description';
import Promote from './components/provider/Promote';
import Appointment from './components/Appointment';
import Calender from './components/Calender'
import Profile from './components/provider/Profile';
import Map from './components/provider/Map';
import Chat from './components/chat/chat'
import Call from './components/chat/call'
const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    console.log(Platform.OS);
    
  }, []);

  return (
  
<Provider  store={store}>
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: Platform.OS === 'ios' ? true : false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Beauty" component={Beauty} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Description" component={Description} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Promote" component={Promote} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Call" component={Call} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
        <Stack.Screen name="Appointment" component={Appointment} options={{ headerShown:  false}}/>
        <Stack.Screen name="Calender" component={Calender} options={{ headerShown:  false}}/>
        <Stack.Screen name="Map" component={Map} options={{ headerShown: Platform.OS === 'ios' ? true : false}}/>
    </Stack.Navigator>

       </NavigationContainer>
       <FlashMessage position="top" />
</Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
});
