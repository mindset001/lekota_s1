import { Platform, StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';



export default function Account({navigation}) {
    return (
      <ScrollView>

<View  style={styles.container}>
<StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />
       <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%',
        marginTop: Platform.OS === 'android'? 20 : 0
      }}>
        <Text style={{fontSize: 24}}>My Profile</Text>
        <TouchableOpacity 
          onPress={()=> navigation.openDrawer()}
        >
        <Image source={require('../assets/harm.png')}/>
        </TouchableOpacity>
        
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20,
       }}>
       <View style={{backgroundColor: 'white', width: 152, height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15}}>
          <Text style={{fontSize: 18, color: '#C1C1C1'}}>Mary</Text>
       </View>
       <View style={{backgroundColor: 'white', width: 152, height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15}}>
          <Text style={{fontSize: 18, color: '#C1C1C1'}}>Ojinkwa</Text>
       </View>
       </View>

       <View style={{ width: '100%',
       }}>
       <View style={{backgroundColor: 'white', height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15, marginTop: 20,}}>
          <Text style={{fontSize: 18, color: '#C1C1C1'}}>mary.ojinkwa@gmail.com</Text>
       </View>
       <View style={{backgroundColor: 'white', height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15, marginTop: 20,}}>
          <Text style={{fontSize: 18, color: '#C1C1C1'}}>08160071243</Text>
       </View>
       </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20,
       }}>
       <View style={{backgroundColor: 'white', width: '65%', height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15}}>
          <Text style={{fontSize: 18, color: '#C1C1C1'}}>Mary</Text>
       </View>
       <View style={{backgroundColor: 'white', width: '20%', height: 45, justifyContent: 'center', paddingLeft: 10, borderRadius: 15, alignItems: 'center'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Map')}>
            <Image source={require('../assets/location.png')} style={{ height: 30, width: 30}}/>
            </TouchableOpacity>
       </View>
       </View>

          {/* straight line  */}
       <View>
           <View
                style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 2  ,
                }}
                />
           </View>

           <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/088-user.png')}/>
            <View style={{
                paddingLeft: 20,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Emergency help</Text>
            <Text style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.5)'
            }}>Notify security personnel</Text>
            </View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.btn}>
            <Image source={require('../assets/088-user.png')}/>
            <View style={{
                paddingLeft: 20,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Help is on the way</Text>
            <Text style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.5)'
            }}>Security personnel has been notified</Text>
            </View>
        </TouchableOpacity> */}

        <View style={{backgroundColor: 'white', marginTop: 30, borderRadius: 10, padding: 10, width: '100%'}}>
          <Text style={{fontWeight: 'bold'}}>Invite Friends</Text>
         <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
         <View style={{flexDirection:'row', width: '70%', alignItems: 'center'}}>
            <View style={{backgroundColor: '#F5F5F8', justifyContent: 'center', height: 30, borderRadius: 10, paddingLeft: 5}}>
            <Text 
              numberOfLines={1}
            >
              bhcfvhvgklndfvgihgklcnlxjhzfyhlk;/mgfbnkjhgvfkej
            </Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#77A1EA', height: 30, borderRadius: 10, width: 40,alignItems: 'center', justifyContent: 'center', marginLeft: -10}}>
              <Text style={{color: '#fff'}}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={require('../assets/team.png')} style={{width:40, height:40}}/>
          </View>
         </View>
        </View>
       
              <View style={{width: '100%', marginTop: 30}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 18, fontWeight: '400'}}>Terms of Service</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row', marginTop: 10, width: 70, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: '400'}}>Logout</Text>
                  <Image source={require('../assets/ant-design_logout-outlined.png')} style={{ width: 15, height: 15}}/>
                </TouchableOpacity>
              </View>
</View>
      
      </ScrollView>

      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight,
      paddingHorizontal: 20
    },
    button:{
      flexDirection: 'row',
      backgroundColor: '#E1ECFF',
      height: 93,
      width: '100%',
      borderRadius: 15,
      borderWidth: 0.5,
      borderColor: '#138DB4',
      marginTop: 30,
      // justifyContent: 'space-around',
      padding: 20,
      alignItems: 'center',
  },

  btn:{
    flexDirection: 'row',
    backgroundColor: '#FFE1E1',
    height: 93,
    width: "100%",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#B41313',
    marginTop: 30,
    // justifyContent: 'space-around',
    padding: 20,
    alignItems: 'center',
}
  })