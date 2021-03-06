import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStack();

const StackNavigator = () => {
 
    const user = false;
  return (
      <Stack.Navigator>
          {user ? (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
              </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen}/> 
          ) }
          
         
   </Stack.Navigator>
  )
}

export default StackNavigator