import {Button, Input} from '@rneui/base';
import {Text} from '@rneui/themed';
import React from 'react';
import {View, Alert} from 'react-native';

function Login() {
  const handleLogin = () => {
    Alert.alert('login');
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
      <Input
        placeholder="Email"
        keyboardType="email-address"
        style={{fontSize: 16}}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        style={{fontSize: 16}}
      />
      <Button
        title={'Login'}
        containerStyle={{borderRadius: 5, width: '100%'}}
        onPress={handleLogin}
        color={'primary'}
      />
    </View>
  );
}

export default Login;
