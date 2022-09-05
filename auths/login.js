import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Image, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, AsyncStorageStatic } from 'react-native';
import Signup from './signup'
import { useState } from 'react';
import Home from '../components/Home'
import HomeDrawer from '../stack/HomeDrawer';
import { Formik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
import { changed } from '../features/tokenSlice';
export default function Login({navigation}) {
  const dispatch = useDispatch()
  const [namy, setNamy] = useState('')
  const [detail, setDetail] = useState()
  // let namy
  // let password = true;

  // const toggleVisibility = () => {
  //   password = !password;

  //   console.log(password);
  // };
  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }
          }>
        <ScrollView style={{height: '100%'}}>
        <View style={styles.container}>
            <StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />

<View style={styles.head}>
          <TouchableOpacity >

          <Text style={{
               fontSize: 24,
               marginTop: Platform.OS === 'ios'? -60 : 60
           }}>Login</Text>
          </TouchableOpacity>
       </View>
                    <Formik 
                         initialValues={{ email: "", password: "" }}
                         validate={(values) => {
                           const errors = {};
                           if (!values.email) {
                             errors.email = "Required";
                           } else if (
                             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                           ) {
                             errors.email = "Invalid email address";
                           }
                           if (!values.password) {
                             errors.password = "Required";
                           }
                           return errors;
                         }}
                         onSubmit={async (values, { setErrors }) => {
                          const errors = {};
                          // console.log("hello")
                          try {
                            const result = await axios.post('https://lekotapp.herokuapp.com/auth/login/', {
                            email: values.email,
                            password: values.password 
                          }
                          )
                          
                          

                          //  console.log(result.data.access);
                          dispatch(changed(result.data.access))

                           navigation.navigate('HomeDrawer')
                
                
                          } catch (error) {
                            
                            if (error.response.data){
                              setNamy('invalid details')
                            }
                         
                          }
                        }}
                    >
                        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (

                            <View style={{marginLeft: 25}}>
                           
                                <TextInput
                                keyboardType = 'email-address'
                                name="email"
                                placeholder ='Email address'
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {errors.email && touched.email && <View><Text style={{color: 'red'}}>{errors.email}</Text></View> }
                                
                                
                            
                                <View>
                      <Text style={{color: 'red'}}> {namy}</Text>
                    </View>
                             
                                <TextInput
                                keyboardType = 'visible-password'
                                name="password"
                                placeholder ='password'
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur}
                                value={values.password}
                                />
                                { errors.password && touched.password &&<View style={{color: 'red'}}><Text>{errors.password}</Text></View> }
                            
                             <View >
                    
                    <Text style={styles.label}>Forgot password?</Text>
                </View>
                <View style={styles.button}>

                <TouchableOpacity
                    disabled={isSubmitting}
                    style={styles.button}
                    onPress={handleSubmit}
                    
                >
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                </View>
                            </View>

                   
                                                    )}

                    </Formik>
                
                <View style={styles.bot}>
                        <View>

                <View style={styles.button}>

                
                <TouchableOpacity
                style={styles.login2}
                onPress={() => navigation.navigate(HomeDrawer)}
                >
                    <Image
                        source={require('../assets/google.png')}
                       
                        style={{ width: 30, height: 30 }}
                    />
                <Text style={{
                    marginLeft: 50,
                    color: '#fff',
                    fontSize: 20
                     
                }}>Login with Google</Text>
                </TouchableOpacity>


                </View>

                <View style={styles.button}>
                <TouchableOpacity
                style={styles.login3}
                >
                    <Image
                        source={require('../assets/apple.png')}
                        
                        style={{ width: 30, height: 30, }}
                    />
                <Text style={{
                    marginLeft: 50,
                    fontSize: 20
                     
                }}>Login with Apple</Text>
                </TouchableOpacity>


                </View>
                <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
                    <Text style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: 18,
                        paddingTop: 20,
                    }}>Don’t have an account? <Text style={{
                        color :"#138DB4",
                        
                        
                    }}> Sign Up
                    
                    </Text> </Text></TouchableOpacity>


                </View>
                    </View>

    </View>
        </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    cover: {
        flex:1,
        paddingTop: 100,
        paddingLeft: 20
    },
    input:{
        borderWidth: 1,
        borderRadius: 50,
        // width: 400,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 100,
        marginTop:19,
        width: 320,
        height: 50,
        
    },
  
    label:{
        color: '#138DB4',
        fontSize: 14,
        textAlign: "right",
        width: 320
    },
   
    login:{
        color: '#fff',
        fontSize: 16,
        height: 50,
        backgroundColor: '#138DB4',
        // width:'100%',
        borderRadius:50,
        padding: 12,
        marginTop:'50%',
        marginLeft: 0,
        marginRight: 40,
        textAlign: 'center'
    },
    login2:{
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        height: 50,
        backgroundColor: '#77A1EA',
        // width:'60%',
        borderRadius:50,
        padding: 10,
        marginTop:43,
        marginLeft: 30,
        marginRight: 40,
        textAlign: 'center'
    },
    login3:{
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        borderWidth:2,
        fontSize: 16,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        // width:'60%',
        borderRadius:50,
        padding: 10,
        marginTop:23,
        marginLeft: 30,
        marginRight: 40,
        textAlign: 'center'
    },
    head: {
        fontSize: '44px',
        textAlign: 'center',
        alignItems: 'center',
        color: '#393939',
        fontWeight: 700
       
    },
    bot:{
        flex: 1,
        marginTop: 20,
    }
  });