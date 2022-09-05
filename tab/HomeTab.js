import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, FlatList} from 'react-native';
// import HomeStack from '../stack/HomeStack';
import Home from '../components/Home'
import Bookings from  '../components/Booking'
import Account from '../components/Account';

const Tab = createBottomTabNavigator();

export default function HomeTab({navigation}) {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
            options={{
                    tabBarIcon: () => (<Image source={require("../assets/images/Icons/Home-unclicked.png")} 
                    style={{width: 20, height: 20}}/> ),
                     headerShown: false
                }}
                />
            <Tab.Screen name="Bookings" component={Bookings} 
            options={{ tabBarIcon: () => (<Image source={require("../assets/images/Icons/Bookings-uncliked.png")} 
            style={{width: 20, height: 20}}/> ), headerShown: false}}
            />
            <Tab.Screen name="Account" component={Account} 
            options={{ tabBarIcon: () => (<Image source={require("../assets/images/Icons/Profile-unclicked.png")} 
            style={{width: 20, height: 20}}/> ), headerShown: false}}
            />

     </Tab.Navigator>

    )}