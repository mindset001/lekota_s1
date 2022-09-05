import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, SafeAreaView, Platform, ImageBackground, ScrollView     } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useEffect } from 'react';
import Modal from 'react-native-modal'


export default function Profile({route, navigation}) {
    const [loaded, setLoaded] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
          }, 10000);
        console.log(route.params);
        
      }, []);

    return(

        <ScrollView>
            <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground source={route.params.imag} style={{
                        width: '100%',
                        height: 300,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                       
                    
                    <View>
                    <Image/>
                    <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Profile</Text>
                    </View>
                    
                </ImageBackground>
            </View>
           <View style={{marginTop: -80, backgroundColor: '#fff', height: 600, borderTopEndRadius:20, borderTopLeftRadius: 20, marginHorizontal:5, alignItems: 'center', marginBottom: 20}}>
           <View style={{flexDirection: 'row',  marginTop: 20}}>
            <View style={{marginLeft: Platform.OS === 'ios'? 10 : 10}}>
                <Image source={require('../../assets/Ratings.png')} style={{ width: 78, height: 14,}}/>
                <Text>39 Reviews</Text>
            </View>
           <Image source={require('../../assets/images/Images/Service_Providers/img1.png')} style={{ width: 148, height: 148, marginTop: -70, marginLeft: 20}}/>
           <View style={{marginLeft: 70}}>
            <Text style={{fontSize: 22}}>34</Text>
            <Text style={{fontSize: 11, fontWeight: "200"}}>Jobs</Text>
           </View>
           </View>
          <View>
            <Text style={{color:'#393939', fontSize: 16, fontWeight:"bold", marginVertical: 15,marginHorizontal: 20,}}>
                Description
            </Text>
          <Text style={{marginHorizontal: 20, marginTop: 0}}>{route.params.description}</Text>
          </View>

          <View>
          <TouchableOpacity 
             onPress={() => {

                {!loaded && showMessage({
                    message: "Your booking was successful, pending confirmation!",
                    type: "info",
                    hideStatusBar: 'true',
                    backgroundColor: "#0CE054",
                    type: "success",
                  });}

                {loaded && showMessage({
                    message: "Confirmed!",
                    description: "Your Service providers will arrive in 15 minutes",
                    hideStatusBar: 'true',
                      backgroundColor: "#0CE054",
                      type: "success", 
                  });}

                  showMessage({
                    message: "Confirmed!",
                    description: "Your Service providers is at your location",
                    hideStatusBar: 'true',
                      backgroundColor: "#0CE054",
                      type: "success", 
                  })
                  navigation.navigate('Chat')
              }}
           style={{marginTop: 40, backgroundColor: '#138DB4', width: 340, height: 62, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginVertical: 20}}>
            <Text style={{color: '#fff', fontSize: 18}}>Confirm Booking</Text>
           </TouchableOpacity>
          </View>


           <View>
            <View  style={{ width: 195,  justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize: 18}} >Status: On-going</Text>
            </View>
           <TouchableOpacity 
            onPress={()=> navigation.navigate('Chat')}
           style={{ backgroundColor: '#fff',borderWidth:1, borderColor: '#138DB4', width: 195, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginVertical: 10}}>
            <Text style={{color: '#138DB4', fontSize: 18}}>Contact</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={handleModal}
            style={{ width: 195, color: '#138DB4', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{color: '#138DB4', fontSize: 18}}>Cancel Appointment</Text>
           </TouchableOpacity>

          
           </View>
           </View>

           {/* MOdal  */}


           <View style={{borderRadius: 30}}>
                                <Modal 
                                animationType="slide"
                                transparent = {true}
                                isVisible={isModalVisible} 
                                style={styles.modal}
                                
                                >
                        <View style={{ flex: 1,
                            backgroundColor: '#E5E5E5',
                            marginLeft:20,
                            height: 40,
                            borderRadius: 30
                            
                        }}>
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 22, color: '#c4c4c4', marginVertical: 20}}>Please tell us why</Text>
                              </View>
                            <View>
                            
                           
                            <TouchableOpacity style={styles.tester}>
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 18}}>
                              I've been waiting for a long time
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tester}>
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 18}}>
                              Client asked me to cancel
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tester}>
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 18}}>
                              I am not closeby
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tester}>
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 18}}>
                              Others
                            </Text>
                            </TouchableOpacity>
                           

                                    <TouchableOpacity  onPress={handleModal} style={styles.proceed}>
                                  <Text style={{fontSize: 14, color: '#fff'}}>Proceed to Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.pro} onPress={()=> {
                              navigation.navigate('Appointment')
                              setIsModalVisible(() => !isModalVisible)
                            }}>
            <Text style={{color: '#138DB4', fontWeight: '600', fontSize: 18}}>Reschedule Instead</Text>
           </TouchableOpacity>
                            </View>
                           
                            </View>
                       
                            <View>
                                  
                            </View>
                        </View>
                    </Modal>
                                </View>
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   marginVertical: 40
    
    },

    modal:{
      maxHeight: 420,
      marginTop: '50%',
      borderRadius: 10
      
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
  pro: {
    alignItems: 'center',
    height: 49,
    width: 310,
    borderRadius: 30,
    justifyContent: 'center',
    marginVertical: 10,
  } 
})