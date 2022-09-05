import { StatusBar } from 'react-native';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import {  useSelector } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

export default function Beauty({route, navigation}){
    const detail = useSelector((state)=> state.details.singleData)
  


    useEffect(() => {
        console.log(detail);
        
      }, []);

    return(
      



<ScrollView>
<View style={
        styles.container}>
            

            
                <View>
                <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 40
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image source={require('.././../assets/back.png')}/></TouchableOpacity>
            <Text style={{
                fontSize: 24,
                paddingRight: 60
            }}>{detail.name}</Text>
            </View>

            <View>
            <TextInput
                        keyboardType = 'email-address'
                        placeholder ='Search for services in sub-category'
                        style={styles.input}
                        />
            </View>
                   <ScrollView style ={{
                    maxHeight: 800,
                    
                   }} showsVerticalScrollIndicator = {false}>
                  
                    {detail.datas.map((data) => 
                    <TouchableOpacity onPress={() => navigation.navigate('Landing', data)}>
                             <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                backgroundColor: '#f6fafc',
                                marginBottom: 20,
                                borderRadius: 20,
                                
                            }}>
                                <Image source={data.image} style={{
                height:150,
                width: 150,
                borderRightWidth: 20,
                borderColor: '#000',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20

              }}/>   
                            <View style={{
                    paddingLeft: 20,
                    paddingTop: 40
                }}>

                            <Text style={styles.item}>{data.text}</Text> 
                            <Text style={{
                     fontSize: 16,
                     color: '#c9c9c9',
                     textAlign: 'left',
                     width: 150
                }}>{data.sub}</Text> 
                            </View>
                             </View>
                             </TouchableOpacity>
                        )}
                   
                   </ScrollView>
                   
                </View>


            <View>
         
        </View>
        </View>
</ScrollView>

       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        height: '100%',
        padding: 20, 
        paddingTop: Constants.statusBarHeight,
        marginBottom:100,
        backgroundColor: '#f5f5f8'
    },
    input:{
        borderWidth: 1,
        borderRadius: 50,
        width: 400,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        marginTop:19,
        width: 320,
        height: 50,
        
    },
    item: {
        fontSize: 20,
        color: '#888888',
        textAlign: 'left',
        width: 150
        
    }
})

