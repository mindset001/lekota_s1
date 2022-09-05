import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image, SafeAreaView, Platform  } from 'react-native';




export default function Notification({navigation}) {



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
                        <TouchableOpacity onPress={() => navigation.goBack('')}>
                        {/* <Image 
                            source={require('../assets/images/Icons/Back.png')}
                            style={{width: 20, height: 40}}
                        /> */}
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 24,
                            marginRight: 120,
                        }}>Notifications</Text>
                    </View>
                   
                    
                            <View >
                                <Text style={{fontSize: 20, paddingHorizontal: 40, paddingVertical: 10, color: '#000'}}>You have a new message in freelance
                                        contracts.</Text>

                                        <Text style={{fontSize: 20, paddingHorizontal: 40, paddingVertical: 10, color: '#c4c4c4'}}>You have a new message in freelance
                                        contracts.</Text>
                            </View>

                           
                            

              

                
                
                </View>

                <View style={styles.bot}>
                        <View>

                

            
                  


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
        input:{
            borderWidth: 1,
            borderRadius: 50,
            width: 400,
            borderColor: '#c4c4c4',
            padding: 8,
            marginLeft: 40,
            marginRight:10,
            marginTop:39,
            height: 77,
            width: 320
            
        },
        inputTwo:{
            borderWidth: 1,
            borderRadius: 50,
            width: 400,
            borderColor: '#c4c4c4',
            padding: 8,
            marginLeft: 10,
            marginRight:10,
            marginTop:39,
            height: 77,
            width: 200 
        },
   
        head: {
            flexDirection: 'row',
            marginLeft: 20,
            fontSize: '44px',
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#393939',
            fontWeight: 700,
            marginTop: 20,
           
        },
        login:{
            color: '#fff',
            fontSize: 16,
            height: 50,
            backgroundColor: '#77a1ea',
            width: 320,
            borderRadius:50,
            padding: 12,
            marginTop:23,
            marginRight: 0,
            marginLeft: 30,
            textAlign: 'center'
        },


 

    })