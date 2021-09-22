import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "../../Screens/login/ScreenLogin"

const Stack = createNativeStackNavigator();

const LoginNavigator = () =>{
    return (
        <Stack.Navigator
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        }} 
        initialRouteName="ScreenLogin">
          <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
        </Stack.Navigator>
    )
}

export default LoginNavigator;