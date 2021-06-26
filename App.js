import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar backgroundColor="#7F5DF0" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={Tabs}
          />
          <Stack.Screen
            name="CryptoDetail"
            component={CryptoDetail}
          />
          <Stack.Screen
            name="Transaction"
            component={Transaction}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;