import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Platform} from 'react-native';
import { DrawerContentScrollView, DrawerItemList,  } from '@react-navigation/drawer';
// import { AntDesign } from '@expo/vector-icons';
// import Promote from './Promote';
// import Profile from './Profile';
import { NavigationProvider } from 'react-navigation';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <TouchableOpacity 
            // onPress={openMenu}
            onPress={() => props.navigation.navigate('HomeTab')}
            >
            
            <Image source={require('../assets/vector.png')} style={{ marginLeft: 20, marginTop: Platform.OS === 'android' ? 20 : 0}}/>
            </TouchableOpacity>
      <View style={{marginHorizontal: 30, marginTop: 0}}>
      <DrawerItemList {...props}/>
      </View>

      <View>
       <TouchableOpacity style={styles.prom} onPress={()=> props.navigation.navigate('Promote')}>
       <Text style={{color: '#fff'}}>
          Become a Service Provider
          </Text>
       </TouchableOpacity>
      </View>

       {/* straight line  */}
       <View style={{marginTop: '80%'}}>
           <View
                style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 2  ,
                }}
                />
           </View>

           <View style={{ alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontWeight: '600'}}>Invite Friends</Text>
            
           </View>
           <View>
           <Text style={{color: '#ababab', marginLeft: 20, fontSize: 18, marginVertical: 10}}>Service provider:</Text>
                <View style={styles.bot}>
                  <View style={styles.test}>
                    <Text 
                    numberOfLines={1}
                    style={{fontSize: 22, fontWeight: '200',}}>https://app.service.chttps://app.service.c</Text>
                    </View>
                  <TouchableOpacity style={styles.btn}>
                    <Text  style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Copy</Text>
                    </TouchableOpacity>
                </View>

           </View>
           <View>
           <Text style={{color: '#ababab', marginLeft: 20, fontSize: 18, marginVertical: 10}}>Purchase a Service:</Text>
                <View style={styles.bot}>
                  <View style={styles.test}>
                    <Text numberOfLines={1} style={{fontSize: 22, fontWeight: '200',}}>https://app.service.chttps://app.service.c</Text>
                    </View>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Copy</Text>
                    </TouchableOpacity>
                </View>

           </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;


const styles = StyleSheet.create({

  prom:{
    backgroundColor: '#77A1EA',
    width: 158,
    height: 42,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  btn:{
    width: 58,
    backgroundColor: '#77A1EA',
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    // marginRight: 40
  },
  bot: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#f5f5f8',
  },
  test:{
    width: 186,
    height: 34,
    
    paddingLeft: 10,
    justifyContent: 'center'
  }
})