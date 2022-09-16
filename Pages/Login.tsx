import {Button, Input} from '@rneui/base';
import {Text} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {View, Alert} from 'react-native';
import * as yup from 'yup';

type LoginTypes = {
  email: string;
  password: string;
};

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(6, 'Password too short').required('Required'),
});

function Login() {
  const initialValues: LoginTypes = {email: '', password: ''};

  const handleLogin = (values: LoginTypes) => {
    Alert.alert('login', values.email);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
      }}>
      <Text h3 style={{marginBottom: 30}}>
        Login
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={values => {
          handleLogin(values);
        }}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <View style={{width: '100%'}}>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              style={{fontSize: 16}}
              onChangeText={handleChange('email')}
              value={values.email}
              errorMessage={errors.email}
              onBlur={handleBlur}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={{fontSize: 16}}
              onChangeText={handleChange('password')}
              value={values.password}
              errorMessage={errors.password}
              onBlur={handleBlur}
            />
            <Button
              title={'Login'}
              containerStyle={{borderRadius: 5, width: '100%'}}
              onPress={handleSubmit}
              color={'primary'}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Login;
