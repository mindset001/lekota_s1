import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Modal from 'react-native-modal'



// const Drawer = createDrawerNavigator();

export default function Promote({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    
        const [count, setCount] = useState(0);


      
  
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }
              }>
        <SafeAreaView style={styles.container}>
            <View style={{
            marginTop: 50,
          
        }}>
            
                <View>
                
                    <Text style={{ fontSize: 22, fontWeight: 'bold', paddingVertical: 20}}>Promote</Text>
                </View>
                <TouchableOpacity>
                    {/* <Image source={require('../assets/g7.png')} style={{ width: 300, height: 200}}/> */}
                </TouchableOpacity>
                        
           
        </View>

       
       <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
            <Text style={styles.test}>Day: </Text>
                <TouchableOpacity style={styles.circle} onPress={() => {setCount(count - 1)}} >
                  
                    <Text style={styles.fig}>-</Text>
                   
                </TouchableOpacity>


                           <View style={{marginRight: 20}}>
                          <Text style={styles.fig}> {count}</Text>
                           </View>


                <TouchableOpacity style={styles.circle} onPress={() => {setCount(count + 1)}}>
                    <Text style={styles.fig}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.test}>Amount: </Text>
               <View style={styles.input}>
               <TextInput />
               </View>
            </View>

            <View style={{flexDirection: 'row',  alignItems: 'center', marginTop: 20}}>
                <Text style={styles.test}>Link: </Text>
                <View style={styles.inputTwo}>
               <TextInput 
                placeholder={'paste link here'}
                style={{padding: 10}}
               />
               </View>
            </View>
        </View>
       

            <View style={styles.bot}>
                <Text style={{color: '#FF0202'}}>Note: A promotion is     5000 per day</Text>
                <TouchableOpacity style={styles.btn}  onPress={handleModal}>
                    <Text style={{ color: '#fff', fontSize: 20}}>Promote</Text>
                </TouchableOpacity>
            </View>

           


                                 {/* card modal  */}
                    <View>
                                <Modal 
                                animationType="slide"
                                transparent = {true}
                                isVisible={isModalVisible} 
                                style={styles.modal}
                                >
                        <View style={{ flex: 1,
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            backgroundColor: '#E5E5E5',
                            marginLeft:20,
                            height: 40,
                            
                        }}>
                            <View style={{flexDirection: 'column', justifyContent: 'space-between', margin: 20}}>
                            <View>
                            <TouchableOpacity  onPress={handleModal}>
                            <Text style={{color: '#77A1EA', fontWeight: 'bold', fontSize: 24, textAlign: 'right'}}>X</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 18, color:'#000', textAlign: 'center'}}>Your request has been sent,
                                    Please await confirmation email</Text>
                            </View>
                           

                            
                            </View>
                       
                            <View>
                                   

                                    
                            </View>
                        </View>
                    </Modal>
                  
                                </View>
                                
                   

        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    input:{
        borderWidth: 1,
        borderColor: '#77a1ea',
        width: 239,
        height: 40,
        borderRadius: 20,
        padding: 10
    },
    inputTwo:{
        borderWidth: 1,
        borderColor: '#77a1ea',
        width: 239,
        height: 40,
        marginLeft: 20,
        borderRadius: 20
    },
    test:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    fig:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#77A1EA',
        // marginRight: 15
    },
    circle:{
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#77A1EA',
        marginRight: 10
    },
    bot: {
        marginTop: '25%'
    },
    btn: {
        backgroundColor: '#77A1EA',
        height: 55,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20
       
    },
    modal:{
        maxHeight: 120,
        marginTop: '130%'
        
    }

    

  });