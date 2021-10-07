import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenMap from "../../Screens/mapa/ScreenMap"

const Stack = createNativeStackNavigator();

const MapNavigator = () =>{
    return (
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          }} 
          initialRouteName="ScreenMap">
          <Stack.Screen name="ScreenMap" component={ScreenMap} />
        </Stack.Navigator>
    )
}

export default MapNavigator;