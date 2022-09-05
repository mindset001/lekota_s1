import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/mySlice';
import React, { useState, useEffect, useRef } from 'react';
import Modal from "react-native-modal";
import Profile from '../provider/Profile'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity ,ScrollView, Button} from 'react-native';
import {
    UIActivityIndicator,
  } from 'react-native-indicators';



export default function Landing({route, navigation}) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    
 
     const [isModalVisible, setModalVisible] = useState(false);

     const toggleModal = () => {
       setModalVisible(!isModalVisible);
       navigation.navigate('Profile', route.params)
     };
     
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
          }, 10000);
        console.log(route.params);
        
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
                        <View style={{marginTop: -80, backgroundColor: '#fff', height: 600, borderTopEndRadius:20, borderTopLeftRadius: 20, marginHorizontal:5}}>
                        <ScrollView  style ={{
                    maxHeight: 800,
                    
                   }} showsVerticalScrollIndicator = {false}>
                        <View style={{margin:20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}} >
                            <View style={{ backgroundColor: 'c4c4c4', width: 200}}>
                            <Text style={{width: 180, fontSize: 18, }}>{route.params.namy}</Text>
                            </View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{route.params.price}</Text>
                        </View>
                        <View style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity 
                            // onPress={decNum} 
                            onPress={() => dispatch(decrement())}
                             style={{marginRight: 10,backgroundColor: '#7d7d7d', borderRadius: 50, height: 23, width: 23,alignItems: 'center'}}>
                                <Text style={{fontSize: 27, color: '#fff', marginTop: -5}}>-</Text>
                            </TouchableOpacity>
                                <View>
                               <Text style={{fontSize: 27}}>
                                {/* {num} */}
                                {count}
                                </Text>
                                </View>
                            <TouchableOpacity 
                            // onPress={incNum}
                            onPress={() => dispatch(increment())}
                             style={{marginLeft: 10,backgroundColor: '#7d7d7d', borderRadius: 50, height: 23, width: 23,alignItems: 'center', }}>
                                <Text style={{fontSize: 24, color: '#fff',marginTop: -3}}>+</Text>
                            </TouchableOpacity>
                        </View>
           
                            <View style={{marginHorizontal: 20}}>
                                <Text style={{color:'#393939', fontSize: 16, fontWeight:"bold", marginVertical: 15}}>Description</Text>
                                <Text >
                                {route.params.description}
                                </Text>

                                <TouchableOpacity onPress={toggleModal}
                                style={{backgroundColor: '#138DB4', width: 340, height: 62, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginVertical: 20}}>
                                    <Text style={{color: '#fff', fontSize: 18}}>Get Service Provider</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={()=> navigation.navigate('Appointment')}
                                style={{backgroundColor: 'rgba(19, 141, 180, 0.04)', borderWidth: 1, borderColor: '#138DB4', width: 340, height: 62, justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                                    <Text style={{color: '#138DB4'}}>Schedule Service Provider</Text>
                                </TouchableOpacity>

                            </View>

                            <Modal isVisible={isModalVisible}>

        {!loaded && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', maxHeight: '40%', borderRadius: 30 }}>

< UIActivityIndicator color='black'/>
  <Text style={{color: '#138DB4', fontSize: 24, width: 200, textAlign: 'center', marginBottom: 40}}>Connecting you to a
                    service provider</Text>

 
</View>}

        {loaded && <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#fff', maxHeight: '70%', borderRadius: 30 }}>

<View style={{justifyContent: 'center', alignItems: 'center'}}>
   <View style={{flexDirection: 'row'}}>
   <Image source={require('../../assets/images/Images/serProv/mask.png')}/>
   <View style={{width:82, height: 82, backgroundColor: '#f4f4f7', justifyContent: 'center', alignItems: 'center',borderRadius: 10 }}>
    <Text style={{fontSize: 44}}>34</Text>
    <Text style={{fontSize: 24}}>JOBS</Text>
   </View>
   </View>
    <Text style={{fontSize: 28, color: '#393939', fontWeight: 'bold'}}>Fayose Jacob</Text>
    <Image source={require('../../assets/Ratings.png')} style={{marginTop: 20}}/>
    <Text style={{marginTop: 10}}>11 Reviews</Text>

    <TouchableOpacity 
            onPress={toggleModal}
    style={{backgroundColor: 'rgba(19, 141, 180, 0.04)', marginTop: 10,
     borderWidth: 1, borderColor: '#138DB4', width: 340, height: 62, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginTop: 30 }}>
        <Text style={{color: '#138DB4', fontSize: 18}}>View Profile</Text>
    </TouchableOpacity>
</View>

{/* <Button title="Hide modal" onPress={toggleModal} /> */}

</View>}
      </Modal>
           </ScrollView>
                        </View>
           </View>
       </View>
      </ScrollView>
    )}

    const styles = StyleSheet.create({
            container:{
               
                paddingTop: StatusBar.currentHeight,

            },
            

    })