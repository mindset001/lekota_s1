import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import Description from './Description'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity ,ScrollView, FlatList} from 'react-native';

export default function Landing({route, navigation}) {
  

    useEffect(() => {
        console.log(route.params.datum);
        
      }, []);


    return (

       <ScrollView>
            <View style={styles.container}>
             <View  >
                <View>
                    <ImageBackground source={route.params.imag} style={{
                        width: '100%',
                        height: 300,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                            <View>
                                <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>{route.params.new}</Text>
                            </View>
                    </ImageBackground>
                </View>
                        <View style={{marginTop: -80, backgroundColor: '#fff', borderTopEndRadius:20, borderTopLeftRadius: 20, marginHorizontal:5}}>
                        <ScrollView  style ={{
                    maxHeight: 800,
                    
                   }} showsVerticalScrollIndicator = {false}>
                        <View style={{margin:20}}>
                            {/* <Text>{route.params.text}</Text> */}
                            <Text style={{fontSize: 16}}>Select Services</Text>
                        </View>
           
          
            {route.params.datum.map((data) => 
             <TouchableOpacity 
             onPress={() => navigation.navigate('Description', data)}
             >
                     <View style={{
                      
                        
                    }}>
                        
                        
                    <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'rgba(19, 141, 180, 0.04)',
                            borderWidth: 1,
                            borderColor: '#138DB4',
                            height: 70.5,
                            width: 340,
                            marginTop: 10,
                            borderRadius: 10,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 20,
                            margin: 25,
                        }}>

                    <Text style={{fontSize: 18, color: '#138DB4', width: 180, height: 50}}>{data.namy} hello</Text> 
                    <Text style={{ color: '#138DB4', fontSize: 18, fontWeight: 'bold'
             
        }}>{data.price}</Text> 
                    </View>
                     </View>
                     </TouchableOpacity>
                )}
          
           </ScrollView>
                        </View>
           </View>
       </View>
       </ScrollView>
    )}

    const styles = StyleSheet.create({
            container:{
                // marginTop: 20,
                // alignItems: 'center',
                flex: 1,
                // alignItems: 'flex-start',
                paddingTop: StatusBar.currentHeight,

            },
            

    })