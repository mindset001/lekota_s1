import { Platform, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import { change, details } from '../features/detailsSlice';
import {  useSelector, useDispatch } from 'react-redux';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { changed } from '../features/tokenSlice';
import { tokenSlice } from '../features/tokenSlice';

const Tab = createBottomTabNavigator();

export default function Home({navigation}) {
  const [user, setUser] = useState();
  const dispatch = useDispatch()


  // const bear = useSelector((state)=> state.tokenSlice)
  // const getToken =() => {
  //   return async dispatch => {
  //     const bear = await AsyncStorage.getItem('token') ;
  //     if (bear.data) {
  //       dispatch({
  //         payload: bear.data
  //       });
  //     } else {
  //       console.log('error message');
  //     }
  //   };
  // }


  // const bear = () => dispatch(changed(AsyncStorage.getItem('token')));
  //  const token = async () => {
  //     setBear()
  //     return bear
  //   }
      //  const token = await AsyncStorage.getItem('token')  

// console.log(bear);
const bear = useSelector((state)=> state.tokenSlice.token)
    
  const getUser = async () => {
    try {
      await axios.get('https://lekotapp.herokuapp.com/auth/users/me/',{
      headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${bear}` ,
                'Content-Type': 'application/json'
              }
            }
           ).then((response) => {
            // console.log(response.data);
            setUser(response.data)
            console.log(user.username);
    });

   } catch (error) {
     console.error(error.message);
   } 
 }


  const detail = useSelector((state)=> state.details)
   

    

  useEffect(() => {
    getUser()
    
    console.log(bear);
  }, []);

 
    return (
     
      <SafeAreaView style={styles.container}>
          <ScrollView>
<View >

<StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />
             {/* <TouchableOpacity onPress={() => navigation.goBack('')}><Image source={require('../assets/back.png')}/></TouchableOpacity> */}
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  {/* user  */}
                 
              <View style={{ flexDirection: 'row',  marginRight: 170,}}>
                <Text style ={{
                fontSize: 24,
                paddingBottom:15,
               
                color: '#333',
              }}>Hi, 
              {!user ? '': user.username}
              </Text>

              <Image
                        source={require('../assets/images/Icons/hand.png')}
                       
                        style={{ width: 30, height: 30, marginLeft:10, }}
                    />
             </View>

                  <View>
                  <TouchableOpacity onPress={()=> navigation.navigate("Notification")}>
                  <Image
                        source={require('../assets/images/Icons/notifications.png')}
                       
                        style={{ width: 30, height: 30, marginLeft: Platform.OS === 'android'? 10 : -40, }}
                    />
                  </TouchableOpacity>
                  </View>
              </View>

              <View>
                {/* carousel  */}
                <View  style={{height: 120, width: 400}}>
                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} >
                {/* <View style={{borderRadius: 20, borderWidth: 3, height:105, width:200, borderColor: '#138DB4', paddingLeft: -30}}> */}
                <ImageBackground source={require('../assets/lll.png')} resizeMode="contain" style={styles.carousel}>
        <Text style={styles.text3}>
                  <Text style={{
                    fontSize: 24,
                    color: 'black'
                  }}>Quality</Text> on demand services at your home or office
                </Text>
              </ImageBackground>
                {/* </View> */}

                      <ImageBackground source={require('../assets/lll.png')} resizeMode="contain" style={styles.carousel}>
                <Text style={styles.text3}>
                  <Text style={{
                    fontSize: 24,
                    color: 'black'
                  }}>Quality</Text> on demand services at your home or office
                </Text>
              </ImageBackground>
              <ImageBackground source={require('../assets/lll.png')} resizeMode="contain" style={styles.carousel}>
              <Text style={styles.text3}>
                  <Text style={{
                    fontSize: 24,
                    color: 'black'
                  }}>Quality</Text> on demand services at your home or office
                </Text>
              </ImageBackground>
                  </SwiperFlatList> 
                </View>
               
              </View>


              <View>


                  <View>
                    {/* search  */}
                      <TextInput
                        style={styles.input}
                        placeholder ='Search for services'
                      />

                  </View>

              
            <View>
             

              {/* services  */}
              <TouchableOpacity >
              <Text style ={{
                fontSize: 24,
                paddingBottom:15,
                marginLeft: 20,
                color: '#333'
              }}>Service Categories</Text>
              
              </TouchableOpacity>
              
              
            </View>
            
            <FlatList
                    numColumns = {2}
                    style={{height: '100%'}}
                    data ={detail.data}
                    renderItem ={({item}) => (
                    <View>
                      
                      <TouchableOpacity onPress={
                        () => {
                          
                          dispatch(change(item)),
                          navigation.navigate('Beauty',)
                        }
                        }>
                        <View >
                          
                            <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                              <Text style={styles.text}>{item.name}</Text>
                            </ImageBackground>

                            </View>
                   
                    </TouchableOpacity>
                    </View>
                    
                    )}
                />
            
            </View>
   
      </View>
      </ScrollView>
     </SafeAreaView>
     
       

      
    );
  }

  const styles = StyleSheet.create({
    container: {
      
      marginTop: Platform.OS === 'android'? 50 : 20,
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'flex-start',
      // justifyContent: 'center',

      paddingTop: StatusBar.currentHeight,

    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'flex-start',
      paddingLeft:10,
      paddingTop: 60,
      width: 160,
      height: 100,
      borderRadius:50,
      paddingLeft:20,
      paddingRight:10,
      marginLeft: 20,
      marginTop: 20
      
    },
    text3: {
      color: "white",
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "bold",
      textAlign: "left",
      paddingLeft: 20,
      paddingTop: 20,
      flex: 1,
      width: 150,
      color: '#000'
      // marginLeft: 10,
    },
    text: {
      color: "white",
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "bold",
      textAlign: "left",
      
      // marginLeft: 10,
    },
    text2:{
      color: "white",
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "bold",
      textAlign: "left",
      flex: 1,
      width: 120,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 320,
      height: 45,
      borderRadius: 20
    },
    scrollView: {
      maxHeight: 110
    },
    carousel:{
      width: 180,
      height: 100,
      borderRadius: 20,
      flex: 1,
      marginLeft: 20,
     
      backgroundColor: 'linear-gradient(61.7deg, #138DB4 2.1%, rgba(255, 255, 255, 0) 100.6%)',
      opacity: 0.3,
      // zIndex: 1
      // resizeMode: 'contain'
    },
    
  })


  