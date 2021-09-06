import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenLogin from "../Screens/ScreenLogin"
import ScreenRegister from "../Screens/ScreenRegister"
import ScreenDetail from "../Screens/ScreenDetail"

const Stack = createNativeStackNavigator();

const TicketNavigator = () =>{
    return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={ScreenLogin} />
          <Stack.Screen name="Register" component={ScreenRegister} />
          <Stack.Screen name="Details" component={ScreenDetail} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default TicketNavigator;