import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenDetail from "../../Screens/cart/ScreenDetail"

const Stack = createNativeStackNavigator();

const CartNavigator = () =>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            }} 
        initialRouteName="ScreenDetail">
          <Stack.Screen 
           name="ScreenDetail"
           component={ScreenDetail} />
        </Stack.Navigator>
    )
}

export default CartNavigator;