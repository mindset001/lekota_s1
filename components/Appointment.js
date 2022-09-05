import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Keyboard, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal'
import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from "react-native-modal-datetime-picker";




export default function Withdraw({navigation}) {

    const [isPickerShow, setIsPickerShow] = useState(false);

    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
      setIsPickerShow(true);
    };
    
  
    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

    
   
    
    return (

        <ScrollView>
            <SafeAreaView style={styles.container}>
           <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 10 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={require('../assets/back.png')}/>
            </TouchableOpacity>
           <Text style={{fontSize: 24, marginLeft: '20%'}}>Book Appointment</Text>
           </View>

           <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, }}>Select a Time</Text>
           </View>

           <View style={styles.card}>
                <Text style={{fontSize: 18}}>Today</Text>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20}}>
                    <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>11:00 AM</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20}}>
                    <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>11:00 AM</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20}}>
                    <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>11:00 AM</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 20}}>
                    <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>10:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                    style={{borderColor: '#138DB4', borderWidth: .5, width: 140, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#138DB4'}}>11:00 AM</Text>
                        </TouchableOpacity>
                </View>
           </View>

           <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity style={{backgroundColor: '#138DB4', width: '100%', justifyContent: 'center', alignItems: 'center', height: 52, borderRadius: 30}}>
                <Text style={{color: '#fff', fontSize: 20}}>Next</Text>
            </TouchableOpacity>
           </View>
           <View  style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={{ fontSize: 20}}>OR</Text>
           </View>
           <TouchableOpacity 
           onPress={showDatePicker}
           style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
               
               <Image source={require('../assets/nine.png')} style={{ width: "100%", height: 150}}/>
               
           </TouchableOpacity>

           <View>
                               {/* <Text style={styles.one}>{date.toUTCString()} </Text> */}
                               {!isPickerShow && (
                                        <View style={styles.btnContainer}>
                                                <TouchableOpacity  onPress={showPicker} style={styles.time}>
                                                        <Text style={{color: '#fff', fontSize: 18}}>Pick Time</Text>
                                                 </TouchableOpacity>
                                        </View>
                                    )}
                                

                                {isPickerShow && (
                                        <DateTimePicker
                                        value={date}
                                        mode={'date'}
                                        // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        is24Hour={true}
                                        onChange={onChange}
                                        
                                        
                                        />
                                    )}
                               </View>

                               <View>

                               {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
                               </View>
        </SafeAreaView>
        </ScrollView>
    )}


    const styles = StyleSheet.create({
        container: {
              flex: 1,
              alignItems: 'flex-start',
              margin: 20,
              
              paddingTop: StatusBar.currentHeight,
        
            },
            card: {
                backgroundColor: '#fff',
                padding: 20,
                marginTop: 20,
                width: '100%',
                borderRadius: 20,

            }

        })