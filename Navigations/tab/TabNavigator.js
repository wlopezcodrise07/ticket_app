import React from 'react';
import {StyleSheet,View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import TicketNavigator from '../shop/TicketNavigator';
import OrderNavigator from '../shop/OrderNavigator';
import CartNavigator from '../cart/CartNavigator';

const BottomTabs= createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            initialRouteName="Shop">
            <BottomTabs.Screen 
                options={{
                    tabBarIcon: () => (
                      <View style={styles.item}>
                        <Entypo name="ticket" size={24} color="black" />
                        <Text>Tickets</Text>
                      </View>
                    )
                  }}    
                name="Shop" component={TicketNavigator} />
            <BottomTabs.Screen
                options={{
                    tabBarIcon: () => (
                      <View style={styles.item}>
                        <Ionicons name="md-cart" size={24} color="black" />
                        <Text>Carrito</Text>
                      </View>
                    )
                  }}  
                name="Cart" component={CartNavigator} />
            <BottomTabs.Screen
                options={{
                    tabBarIcon: () => (
                        <View style={styles.item}>
                        <Entypo name="shopping-bag" size={24} color="black" />
                        <Text>Mis Compras</Text>
                        </View>
                    )
                    }}  
                name="Order" component={OrderNavigator} />
        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create({

    tabBar: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90,
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
export default TabNavigator;