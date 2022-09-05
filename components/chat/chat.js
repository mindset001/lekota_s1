import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image, SafeAreaView,Linking, Platform     } from 'react-native';
import Call from './call';
import Modal from 'react-native-modal'



export default function Chat({navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const dialCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${08033696860}';
        }
        else {
          phoneNumber = 'telprompt:${08033696860}';
        }
    
        Linking.openURL(phoneNumber);
      };    


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
                        {/* <TouchableOpacity onPress={() => navigation.goBack('')}>
                        <Image 
                            source={require('../assets/images/Icons/Back.png')}
                            style={{width: 30, height: 30}}
                        />
                        </TouchableOpacity> */}
                        <View>
                        <Text style={{
                            fontSize: 24
                        }}>Client's Name</Text>
                        <Text>Online</Text>
                        </View>
                        <TouchableOpacity onPress={handleModal}><Image source={require('../../assets/bx_bxs-phone-call.png')} style={{width: 30, height: 30}}/></TouchableOpacity>
                    </View>
                    {/* straight line  */}
           <View>
           <View
                style={{
                    borderBottomColor: '#ededed',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />
           </View>
                   
                    

                            

               

                
                
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
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
                            <View>
                            <Text style={{fontSize: 27, fontWeight: 'bold'}}>Contact Options</Text>
                            <Text style={{fontSize: 14, color:'#ababab'}}>Carrier rates may apply</Text>
                            </View>
                           <TouchableOpacity  onPress={handleModal}>
                            <Text style={{color: '#77A1EA', fontWeight: 'bold', fontSize: 24}}>X</Text>
                            </TouchableOpacity>

                            
                            </View>
                       
                            <View>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Call')}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 200, marginHorizontal: 30, alignItems: 'center', marginVertical: 30}}>
                                        <Image source={require('../../assets/bag.png')}/>
                                        <Text style={{paddingRight: 80}}>Call client in-app</Text>
                                    </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={dialCall}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 200, marginHorizontal: 30, alignItems: 'center'}}>
                                    <Image source={require('../../assets/bag.png')}/>
                                        <Text style={{paddingRight: 60}}>Call client by phone</Text>
                                    </View>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
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
            flexDirection: 'row',
            marginHorizontal: 20,
            fontSize: '44px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#393939',
            fontWeight: 700,
            marginTop: 20,
            marginBottom: 10,
            
           
        },
        cover: {
            marginHorizontal: 20,
        },
     

        modal:{
            
            maxHeight: 226,
            marginTop: Platform.OS === 'android'?'100%': "80%",
            borderRadius:30
            
        }
 

    })