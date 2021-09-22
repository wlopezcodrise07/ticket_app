import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
import Order from '../../components/Order';

const ScreenOrder = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.titleScreen}>Mis Compras</Text>  
           <Order/>
        </View>
    )
}

export default ScreenOrder

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },  
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color : '#0A1F49',
  },
  titleScreen: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    color : '#0A1F49',
    paddingVertical:50,
  },
  screen: {
    paddingTop: 50,
    paddingHorizontal:30,
    backgroundColor: '#F0F0F0',
    flex: 1,
    borderColor: '#0A1F49',
    borderWidth: 3,
    borderRadius: 5,
  }
})