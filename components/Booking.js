import { StatusBar, Platform} from 'react-native';
import React, { useState, useMemo } from 'react';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Button, Image, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import  Home from '../components/Home'
import Modal from 'react-native-modal'
// import { Platform } from 'react-native-web';



function Item (props) {

    return (
      // <Item></Item>
      <ScrollView>
        <View>
        <View style={styles.item}>
        <View>
          <Image source={props.item.imag} style={{width: 150, height: 150}}/>
        </View>
       <View>
       <View style={{
       
        // width: ,
        marginLeft: -60,
        marginTop: -40,
        paddingHorizontal: 30,
        
       }}>
            <Text 
             numberOfLines={1}
            style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.4)', width: 80}}> {props.item.Title} </Text>
            <Image source={props.item.image} style={{ width: 80, height: 15, marginTop: 10}}/>
              
       </View>
       
       </View>
       <View style={{width: 180,marginLeft: 0}}>
        <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 34, color: 'rgba(0, 0, 0, 0.4)',}}>{props.item.date}</Text>
        <Text style={{fontSize: 18, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400'}}>Jobs</Text>
        </View>
        
        <Text style={{fontSize: 14, color: 'rgba(0, 0, 0, 0.5)',fontWeight: '600', paddingTop: 55}}>{props.item.service} reviews</Text>
        </View>

        
      </View>
      </View>
      </ScrollView>

      
    );
  }

  export default function Clients({navigation}) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  // const [isModalVisit, setIsModalVisit] = useState(false);

  const handleMode = () => navigation.navigate('Home');
    

   
    const [fullList, setFullList] = useState([

      { "id":1, "Title":"Odinaka Ali", "Status":"pending", service: "3", date: '11', image:require('../assets/Ratings.png'), imag: require('../assets/images/Images/serProv/new.png')},
      { "id":2, "Title":"Moshood Shittu", "Status":"complete", service: "4", date: '5', image:require('../assets/Ratings.png'), imag: require('../assets/images/Images/serProv/new.png')},
      { "id":3, "Title":"Shekoni Shakiru", "Status":"decline", service: "3", date: '5', image:require('../assets/Ratings.png'), imag: require('../assets/images/Images/serProv/new.png')},
      { "id":4, "Title":"Chris Emeka", "Status":"pending", service: "3", date: '6', image:require('../assets/Ratings.png'),imag: require('../assets/images/Images/serProv/new.png') },
      { "id":5, "Title":"Tiamiyu Mubarak", "Status":"pending", service: "10", date: '20', image:require('../assets/Ratings.png'), imag: require('../assets/images/Images/serProv/new.png') },
      { "id":6, "Title":"Ayo Fayose", "Status":"complete", service: "6", date: '10', image:require('../assets/Ratings.png'), imag: require('../assets/images/Images/serProv/new.png')} 
    ]);
  
    // Keep a statue of the current selected status
    const [status, setStatus] = useState('NONE')
  
    // the filtered list, cached with useMemo
    // the callback is call each time the status or the fullList changes
    const filteredList = useMemo(
      () => {
        if (status === 'NONE' ) return fullList
        return fullList.filter(item => status === item.Status)
      },

      [status, fullList,]
    )
  
    // the onClick Method is a method that returns a method, which
    // updates the state based on the predefined status
    const onClick = (status) => () => {
        setStatus(status)
    }
  
    return (
      <View style={styles.container}>
        <StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />
            <View style={styles.fill}>
            <Text style={{
                fontSize: 24,
                color: 'rgba(0, 0, 0, 0.6)',
                marginBottom: 20,
                marginTop: 10,
              }}>My Appointments</Text>
      <View style={styles.filterBar}>
          
            <TouchableOpacity onPress={onClick('pending')}> 
          <Text style={
                    status === "pending" ? styles.activeText : styles.regularText
                  }> Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClick('complete')}> 
          <Text 
          
          style={
            status === "complete"  ? styles.activeText : styles.regularText
          }> Completed</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onClick('decline')}> 
          <Text style={
                    status === "decline" ? styles.activeText : styles.regularText
                  }> Declined</Text>
            </TouchableOpacity>
      </View>
            </View>

      <FlatList
        style={styles.list}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        data={filteredList}
      
      />
                      {/* decline  */}
               

                                {/* end  */}

                                

      
      </View>
    );
  }
  
   
  const styles = StyleSheet.create({
    container: {
     
      paddingTop: StatusBar.currentHeight,
    },
    filterButton: {
      borderRadius: 15, padding: 8, paddingLeft:24, paddingRight:24,
      marginRight:8
    },
    filterBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        paddingTop: 20
    },
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 0,
        marginTop: 20,
        height: 148,
        paddingHorizontal: 10,
        // alignContent: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
      },
      fill:{
        backgroundColor: 'white',
        paddingVertical: Platform.OS === 'android' ? 25 : 5 ,
        paddingHorizontal: Platform.OS === 'android'? 25 : 10,
        width: '100%',
        marginVertical: Platform.OS === 'android'? 10 : 0,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      modal:{
        maxHeight: 400,
        marginTop: '50%',
        // borderRadius: 10
        
    },
    tester:{
      borderWidth: 1,
      borderRadius: 30,
      width: 310,
      height: 49,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#c4c4c4",
      marginBottom: 10
    },
    proceed: {
      alignItems: 'center',
      backgroundColor: '#138DB4',
      height: 49,
      width: 310,
      borderRadius: 30,
      justifyContent: 'center',
      marginTop: 10,
    },
    regularText:{
      fontSize: 15,
      color: 'rgba(0, 0, 0, 0.5)'
    },
    activeText: {
      color: '#138DB4',
      fontWeight: 'bold',
      // paddingBottom: 10,
      
    }
  });
  