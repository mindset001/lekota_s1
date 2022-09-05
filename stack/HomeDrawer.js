import  React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Payment from '../components/provider/Payments'

import Support from '../components/Support'
import About from '../components/About'
// import Profile from '../components/Profile';
import HomeTab from '../tab/HomeTab';
import CustomDrawer from '../components/customDrawer'
import 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export default function HomeDrawer({navigation}) {
    return (
          
        
        <Drawer.Navigator screenOptions={{drawerPosition:"right"}} 
        drawerContent={props => <CustomDrawer {...props}/>}
        >

        <Drawer.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false,  drawerItemStyle: { height: 0 }}}/>
        {/* <Drawer.Screen name="Profile " component={Profile} options={{ headerShown: false,  drawerItemStyle: { height: 0 },}} /> */}
        <Drawer.Screen name="Payments" component={Payment} options={{ headerShown: false}}/>
        <Drawer.Screen name="Support" component={Support} options={{ headerShown: false}}/>
        <Drawer.Screen name="About" component={About} options={{ headerShown: false}}/>
      </Drawer.Navigator>
        
  
    );
  }
  