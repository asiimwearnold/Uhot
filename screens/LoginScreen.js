import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <View>
      <Text>Login to get matched</Text>
      <Button title="login" onPress= {signInWithGoogle}/>
    </View>
  )
}

export default LoginScreen