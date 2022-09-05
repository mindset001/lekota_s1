import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View,  Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import MapView from 'react-native-maps';
// import { Searchbar } from 'react-native-paper';



// const Drawer = createDrawerNavigator();
// MapboxGL.setAccessToken('AIzaSyAq221-uvlRBZybieivZCu-FEru9J-cz54');
export default function Promote({navigation}) {
  
  
    return (
       
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }
              }>
            <ScrollView>
                <View>
                    {/* <Text>Map</Text> */}

                    <View style={styles.mapcontainer}>

                    {/* <MapView
      style={styles.map}
      initialRegion={{
        latitude: 42.882024,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    /> */}
   <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showUserLocation={true} >
       <Marker coordinate={{
         latitude: 37.78825,
         longitude: -122.4324,
       }}  />
       <View style={{ width: "100%", paddingHorizontal: 20}}>
       <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 10, marginBottom: 20, width: '90%', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: "#fff", width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
            <Image source={require('../../assets/back.png')}/>
            </TouchableOpacity>

            <View  style={{backgroundColor: "#fff", width: "90%", height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 50, flexDirection: 'row', width: '80%', justifyContent: 'space-between', paddingHorizontal: 20}}>
            <TextInput
              placeholder='Enter Address'
              multiline
            />
            <View style={{width: '10%'}}>
            <Image source={require('../../assets/bx_bx-arrow-back.png')} />
            </View>
            </View>
           </View>
       </View>
   </MapView>
</View>
                </View>
        </ScrollView> 
        </TouchableWithoutFeedback>
    )
}
 

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        marginHorizontal: 20
      },

       page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  },
  mapcontainer: {
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
},
map: {
    ...StyleSheet.absoluteFillObject,
},

      
  });