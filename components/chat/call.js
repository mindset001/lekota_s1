import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image, SafeAreaView, Platform  } from 'react-native';
import Chat from './chat';




export default function Call({navigation}) {



    return (
            <SafeAreaView style={styles.container}>
                 <View  >
              <StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />
           <View style={styles.cover}>
                    <View style={styles.head}>
                     
                        <View>
                        <Text style={{
                            fontSize: 24
                        }}>Client's Name</Text>
                        </View>
                        <View>
                            <Text style={{ marginHorizontal:40, }}>CALLING</Text>
                            <Text  style={{ marginHorizontal:50, }}>0:00</Text>
                        </View>

                        <View style={{marginTop: Platform.OS === 'android'? "90%" : "30%"}}>
                            <Image source={require('../../assets/g33.png')}/>
                            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}><Image source={require('../../assets/end.png')} style={{ marginHorizontal:50, marginTop: 50}}/></TouchableOpacity>
                        </View>
                      
                    </View>
         
                   
                    

                            

               

                
                
                </View>

               

                   
        </View>
            </SafeAreaView>
       
    )}


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        //   alignItems: 'center',
          marginVertical: Platform.OS === 'android'? 40 : 0
        
        },
    
   
        head: {
            flexDirection: 'column',
            marginHorizontal: 20,
            fontSize: '44px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#393939',
            fontWeight: 700,
            marginTop: 20,
            marginBottom: 10,
           
        },
     


 

    })