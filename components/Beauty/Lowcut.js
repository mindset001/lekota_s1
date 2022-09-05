import { StatusBar } from 'react-native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';

export default function App() {
    return(
        <View style={styles.container}>
            <View>
            <ImageBackground source={require('./../../assets/images/Images/sub_category_img/MG_1.png')} resizeMode="contain" style={{
                    width: 500,
                    height:300
                }}>
                        <Text style={{
                            paddingTop:100,
                            textAlign: 'center',
                            fontSize: 34,
                            color: '#f8f8f8'
                        }}>Beauty & Grooming</Text>
                </ImageBackground>
            </View>

            <View style= {styles.cover}>
                {/* Header  */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom:30
                }}>
                        <View>
                            <Text style={{
                                fontSize: 24,
                                color: '#888888',
                            }}>Men's Grooming</Text>
                            <Text style={{
                                fontSize: 20,
                                color: '#888888',
                            }}>Lowcut</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#c4c4c4',
                            borderRadius: 30,
                            width: 80,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: '#333'
                            }}>#500</Text>
                        </View>

                </View>


                {/* bottom  */}
                <View>
                    <View>
                        {/* button  */}
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 16,
                            color: '#393939'
                        }}>Description</Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#393939',
                            lineHeight: 19,
                            textAlign: 'left',
                            paddingTop: 10
                        }}> Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Nunc sit arcu ultricies auctor 
                            nunc. Massa gravida sit interdum aliquam. 
                            Turpis lobortis ipsum mi quis. Magna lectus 
                            aliquet lectus dictum mi molestie volutpat. 
                            Volutpat gravida libero, velit eros in vitae 
                            sodales. Et, phasellus turpis et cursus sed erat 
                            vel viverra. Ipsum sit ac ridiculus condimentum 
                            convallis pulvinar in. Venenatis, sollicitudin volutpat 
                            venenatis, nibh odio urna, mattis in in.
                            Nibh venenatis cursus at diam sed libero amet. Lacus, nulla est iaculis vel a. Tellus 
                            vulputate feugiat semper fermentum pellentesque a. Risus egestas tristique fames bibendum. Malesuada.</Text>
                    </View>
                    <View style={styles.button}>
                <TouchableOpacity
                style={styles.login}
                >
                  
                <Text style={{
                    marginLeft: 70,
                    color: '#fff',
                    fontSize: 20
                     
                }}>Get a Service Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.login2}
                >
                  
                <Text style={{
                    marginLeft: 60,
                    fontSize: 20,
                    color: '#138DB4',
                     
                }}>Schedule a Service Provider</Text>
                </TouchableOpacity>


                </View>
                </View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign:'center',
        
    },
    cover:{
        marginTop: -70,
        padding: 30,
        backgroundColor: '#fff',
        height: 300,
        width:400,
        marginLeft: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 40
        // borderRadius: 50


    },
    login:{
        fontSize: 16,
        height: 50,
        backgroundColor: '#138DB4',
        width:'100%',
        borderRadius:50,
        padding: 12,
        marginTop:43,
        textAlign: 'center'
    },
    login2:{
        
        fontSize: 16,
        height: 50,
        borderWidth: 2,
        borderColor: '#138DB4',
        backgroundColor: '#f6fafc',
        width:'100%',
        borderRadius:50,
        padding: 12,
        marginTop:13,
        textAlign: 'center'
    },
})