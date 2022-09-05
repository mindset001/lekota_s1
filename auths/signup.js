import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Image, ScrollView, Platform  } from 'react-native';
import Modal from "react-native-modal";
import { Formik } from 'formik';
import Login from './login.js';
import Home from '../components/Home'

// 

export default function Signup({navigation}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return (

        <ScrollView>
            <View style={styles.container} >
              <StatusBar 
            barStyle = "dark-content" 
            hidden = {false}
             backgroundColor = "#138DB4" 
             translucent = {true}
             />
           <View style={styles.cover}>
                    <View style={styles.head}>
                        <Text style={{
                            fontSize: 24,
                            marginTop: Platform.OS === 'android' ? 30 : 0
                        }}>Sign Up</Text>
                    </View>
                    <View>

                    <Formik
       initialValues={{ email: '', password: '', re_password: '', username: '', phone_number: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
            errors.password = "Required";
          }
          if (!values.re_password) {
            errors.re_password = "Required";
          }
          if (!values.phone_number) {
            errors.phone_number = "Required";
          }
          if (!values.username) {
            errors.username = "Required";
          }
         return errors;
       }}
    //    onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }}


    onSubmit={async (values, { setErrors }) => {
        const errors = {};
        // console.log("hello")
        try {
          const result = await axios.post('https://lekotapp.herokuapp.com/auth/register/', {
          email: values.email,
          password: values.password, 
          password: values.re_password,
          password: values.phone_number,
          password: values.username,
        }
        )
        
        

         console.log(result.status);
        
         navigation.navigate('HomeDrawer')


        } catch (error) {
          console.log(error.response.data);
          
        //   if (error.response.data){
        //     setNamy('invalid details')
        //   }
       
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
         /* and other goodies */
       }) => (
        <View>

<TextInput
                        keyboardType = 'email-address'
                        placeholder ='Full name'
                        name="username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur}
                        value={values.username}
                        style={styles.input}

                        
                        />
                        { errors.username && touched.username &&<View style={{color: 'red', paddingLeft: 30}}><Text style={{color: 'red'}}>{errors.username}</Text></View> }

                        <TextInput
                        keyboardType = 'visible-password'
                        placeholder ='Email Address'
                        name="email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur}
                        value={values.email}
                        style={styles.input}
                        // {errors.email && touched.email && <View><Text style={{color: 'red'}}>{errors.email}</Text></View> }
                        />
                        { errors.email && touched.email &&<View style={{color: 'red'}}><Text style={{color: 'red', paddingLeft: 30}}>{errors.email}</Text></View> }
                        <TextInput
                        keyboardType = 'numeric'
                        placeholder ='Phone number'
                        name="phone_number"
                        onChangeText={handleChange('phone_number')}
                        onBlur={handleBlur}
                        value={values.phone_number}
                        style={styles.input}
                        />
                        { errors.phone_number && touched.phone_number &&<View style={{color: 'red'}}><Text style={{color: 'red', paddingLeft: 30}}>{errors.phone_number}</Text></View> }
                        <TextInput
                        keyboardType = 'visible-password'
                        placeholder ='password'
                        name="password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur}
                        value={values.password}
                        style={styles.input}
                        />
                        { errors.password && touched.password &&<View style={{color: 'red'}}><Text style={{color: 'red', paddingLeft: 30}}>{errors.password}</Text></View> }
                        <TextInput
                        keyboardType = 'visible-password'
                        placeholder ='Confirm Password'
                        name="re_password"
                        onChangeText={handleChange('re_password')}
                        onBlur={handleBlur}
                        value={values.re_password}
                        style={styles.input}
                        />
                        { errors.re_password && touched.re_password &&<View style={{color: 'red'}}><Text style={{color: 'red', paddingLeft: 30}}>{errors.re_password}</Text></View> }

<View style={styles.button}>
                <TouchableOpacity
                    style={styles.button}
                    disabled={isSubmitting}
                    onPress={handleSubmit}
                    // onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.login}>Sign Up</Text>
                </TouchableOpacity>
                </View>
        </View>
        
       )}


       </Formik>
                    </View>
                    

                    <View >
                    
                    
                </View>
                            <View style={{
                                flexDirection: 'row',
                                width: 320,
                                marginLeft: 40,
                                marginTop: 30,
                                justifyContent: 'space-between',
                                marginVertical:20,
                            }}>
                                {/* cards  */}
{/* 
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    width: '40%',
                                    backgroundColor: '#fff',
                                    borderWidth: 1,
                                    borderRadius: 50,
                                    height: 50,
                                    alignItems: 'center',
                                    padding: 10,
                                    borderColor: '#C4C4C4',
                                }}
                >
                    <Image
                        source={require('../assets/lite.png')}
                       
                        style={{ width: 20, height: 20 }}
                    />
                <Text style={{
                    marginLeft: 50,
                    
                    color: '#000',
                    fontSize: 20
                     
                }}>cash</Text>
                </TouchableOpacity>
                                <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    width: '40%',
                    backgroundColor: '#fff',
                    borderColor: '#C4C4C4',
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 50,
                    alignItems: 'center',
                    padding:10
                }}
                onPress={handleModal}
                >
                    <Image
                        source={require('../assets/credit.png')}
                       
                        style={{ width: 30, height: 30 }}
                    />
                <Text style={{
                    marginLeft: 40,
                    color: '#000',
                    fontSize: 20
                     
                }}>card</Text>
                </TouchableOpacity> */}

                {/* card modal  */}
                                <Modal 
                                animationType="slide"
                                transparent = {true}
                                isVisible={isModalVisible} 
                                
                                >
                        <View style={{ flex: 1,
                            justifyContent: 'center',
                            backgroundColor: '#E5E5E5',
                            marginLeft:20,
                            height: 40,
                            
                        }}>
                        <Text style={{
                            fontSize: 24,
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>Card</Text>

<TextInput
                        keyboardType = 'numeric'
                        placeholder ='Card Number'
                        style={styles.modalInput}
                        />
                        <TextInput
                        keyboardType = 'numeric'
                        placeholder ='CVV'
                        style={styles.modalInput}
                        />
                        <TextInput
                        keyboardType = 'numeric'
                        placeholder ='Expiry date'
                        style={styles.modalInput}
                        />


                        <TouchableOpacity onPress={handleModal} style={{
                            
                            fontSize: 16,
                            height: 50,
                            backgroundColor: '#138DB4',
                            width:'90%',
                            borderRadius:50,
                            padding: 12,
                            marginTop:23,
                            marginLeft: 15,
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white', 
                                fontSize: 24
                            }}>Add Card</Text>
                        </TouchableOpacity>
                        </View>
                    </Modal>

                
                            </View>

                {/* buttons  */}
               

                
                
                </View>

                <View style={styles.bot}>
                        <View>

                <View style={styles.button}>
                <TouchableOpacity
                style={styles.login2}
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
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: 18,
                        paddingTop: 20,
                    }}>Already have an account? <Text style={{  
                        color :"#138DB4",
                        
                        
                    }}>Login</Text> </Text>
                    </TouchableOpacity>


                </View>
                    </View>

                   
        </View>
        </ScrollView>
    )}


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        //   alignItems: 'center',
          justifyContent: 'center',
        
        },
        input:{
            borderWidth: 1,
            borderRadius: 50,
            width: 400,
            borderColor: '#777',
            padding: 8,
            marginLeft: 40,
            marginRight:10,
            marginTop:19,
            height: 50,
            width: 320
            
        },
        modalInput:{
            borderWidth: 1,
            borderRadius: 50,
            width: 400,
            borderColor: '#777',
            padding: 8,
            marginLeft: 20,
            marginRight:10,
            marginTop:19,
            height: 50,
            width: 290
            
        },
        head: {
            fontSize: '44px',
            textAlign: 'center',
            alignItems: 'center',
            color: '#393939',
            fontWeight: 700,
            marginTop: 20,
           
        },
        login:{
            color: '#fff',
            fontSize: 16,
            height: 50,
            backgroundColor: '#138DB4',
            width: 320,
            borderRadius:50,
            padding: 12,
            marginTop:23,
            marginRight: 0,
            marginLeft: 30,
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
            width: 320,
            borderRadius:50,
            padding: 10,
            marginTop:23,
            marginRight: 0,
            marginLeft: 30,
            textAlign: 'center'
        },

        login2:{
            flexDirection: 'row',
            alignItems: 'center',
            color: '#fff',
            fontSize: 16,
            height: 50,
            backgroundColor: '#77A1EA',
            width: 320,
            borderRadius:50,
            padding: 10,
            marginTop:23,
            marginRight: 0,
            marginLeft: 30,
            textAlign: 'center'
        },

    })