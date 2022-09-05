import { StatusBar } from 'react-native';
import React, { useState,  useRef, } from 'react';
import { StyleSheet, Text, View,Keyboard, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, FlatList,Platform,
    UIManager, LayoutAnimation, SafeAreaView} from 'react-native';






export default function Calender({navigation}) {




    return (

        <ScrollView>
            <SafeAreaView style={styles.container}>
           <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 10 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={require('../assets/back.png')}/>
            </TouchableOpacity>
           <Text style={{fontSize: 24, marginLeft: '20%'}}>Make a Schedule</Text>
           </View>

           <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, }}>Choose a Date</Text>
           </View>


                    {/* caleder  */}
                    
            
         
                   </SafeAreaView>
        </ScrollView>
    )}


    const styles = StyleSheet.create({
        container: {
              flex: 1,
              alignItems: 'flex-start',
              margin: 20,
              
              paddingTop: StatusBar.currentHeight,
        
            },
          

        })