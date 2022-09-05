import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Modal from 'react-native-modal'
import RadioGroup from 'react-native-radio-buttons-group';



// const Drawer = createDrawerNavigator();

export default function Promote({navigation}) {
   

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Cash',
            value: 'Cash'
        },
        {
            id: '2',
            label: 'Card',
            value: 'Card'
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
      
  
    return (
       
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }
              }>
            <ScrollView>
            <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 10, marginBottom: 20 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>
           <Text style={{fontSize: 24, marginLeft: '30%'}}>Payment</Text>
           </View>

           <View 
           style={{marginTop: 20, width: '100%', alignItems: 'flex-start'}}>
           <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
           </View>
            </View>
            <View style={styles.inputTwo}>
               <TextInput 
                placeholder={'Card Number'}
                style={{padding: 10}}
               />
               </View>

               <View style={styles.inputTwo}>
               <TextInput 
                placeholder={'Exp. Date'}
                style={{padding: 10}}
               />
               </View>

               <View style={styles.inputTwo}>
               <TextInput 
                placeholder={'CVV'}
                style={{padding: 10}}
               />
               </View>

               <TouchableOpacity style={{width: '90%', marginTop: 20, justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: '#138DB4', marginLeft: 20, borderRadius: 30}}>
                <Text>Add Card</Text>
               </TouchableOpacity>
        </ScrollView> 
        </TouchableWithoutFeedback>
    )
}
 

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        // marginHorizontal: 20
      },

      inputTwo:{
        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: '90%',
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 50
    },
  });