import React,{useEffect} from 'react'
import * as Font from 'expo-font'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'

const ScreenLogin = ({
    handlePressAcceso,
    handleChangeUsuario,
    handleChangeClave,
    usuarioIngreso,
    claveIngreso,
}) => {
    
  useEffect(() => {
    loadFonts();
    })

    const loadFonts = async () => {
    await Font.loadAsync({
    'roboto-light':require('../assets/roboto/Roboto-Light.ttf')
    })
    }

    return (
    <React.Fragment>

        <View>
            <View>
                <Text style={styles.titleScreen}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleText}>Usuario</Text>        
                <TextInput
                placeholder="Ingrese test@example.com "
                style={styles.input}
                onChangeText={handleChangeUsuario}
                autoCapitalize='none'
                value={usuarioIngreso}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleText}>Clave</Text>        
                <TextInput
                placeholder="Ingrese 123456 "
                style={styles.input}
                onChangeText={handleChangeClave}
                autoCapitalize='none'
                value={claveIngreso}
                />
            </View>
            <View>
        <Text>
        {"\n"}
        </Text>   
            <Button
              title="AGREGAR"
              color="#0A1F49"
              onPress={handlePressAcceso} 
            />

            </View>
        </View>
        </React.Fragment>
    
    )
}

export default ScreenLogin

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
    fontFamily:'roboto-light'
  },
  titleScreen: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    color : '#0A1F49',
    paddingVertical:50,
    fontFamily:'roboto-light'
  }
})
