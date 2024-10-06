import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logintext}>Hey, {'\n'}Register Now!</Text>
      <View style={styles.textContainer}>
      <Text style={styles.studentText}>Student</Text>
      <Text style={styles.demacation}>/</Text>
      <Text style={styles.guardianText}>Guardian</Text>
      </View>

      <Formik initialValues={{email: '', password: ''}} onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.inputContainer}>

         <TextInput style={styles.textinput1}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <TextInput style={styles.textinput2}
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>  
     )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, // centers horizontally
    },
    logintext: {
        fontFamily: 'georgiab',
        fontSize: 32,
        color: 'black',
    },
    textContainer: {
        flex:1,
        flexDirection: 'row',
    },
    studentText: {
        fontFamily: 'georgia',
    },
    guardianText: {
        fontFamily: 'georgia',
    },
    demacation: {
        fontFamily: 'georgia',
        color: '#A35200',
    },
    textinput1: {
        backgroundColor: 'transparent',
        color: '#000',
        borderColor: '#848484',
        borderWidth: 1,
        borderRadius: 4,
    },
    textinput2: {
        backgroundColor: 'transparent',
        color: '#000',
        borderColor: '#848484',
        borderWidth: 1,
        borderRadius: 4,
    },
    inputContainer: {
        flex: 1,
        padding: 12,
        flexDirection: 'column',

    },
});
