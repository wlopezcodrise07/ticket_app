import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "../../Screens/login/ScreenLogin"
import ScreenRegister from "../../Screens/shop/ScreenRegister"

const Stack = createNativeStackNavigator();

const TicketNavigator = () =>{
    return (
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          }} 
          initialRouteName="ScreenRegister">
          <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
        </Stack.Navigator>
    )
}

export default TicketNavigator;