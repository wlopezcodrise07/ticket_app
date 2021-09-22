import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOrder from "../../Screens/shop/ScreenOrder"

const Stack = createNativeStackNavigator();

const TicketNavigator = () =>{
    return (
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          }} 
          initialRouteName="ScreenOrder">
          <Stack.Screen name="ScreenOrder" component={ScreenOrder} />
        </Stack.Navigator>
    )
}

export default TicketNavigator;