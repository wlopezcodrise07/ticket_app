import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';
import ScreenRegister from './Screens/ScreenRegister';
import ScreenLogin from './Screens/ScreenLogin';
import usuarios from './Data/Usuarios';
export default function App() {

const [usuarioIngreso, setUsuarioIngreso] = useState('');
const [claveIngreso, setClaveIngreso] = useState('');
const [acceso,setAcceso] = useState(false)
const [msgError,setMsgError] = useState('')
const [datosUsuario,setDatosUsuario] = useState([])
console.log(acceso)
const handleChangeUsuario = (text) => {
  setUsuarioIngreso(text)
}
const handleChangeClave = (text) => {
  setClaveIngreso(text)
}
const handlePressAcceso = () => {
  setMsgError('')
  const usuarioSession = usuarios.filter(usuario => usuario.password ==claveIngreso && usuario.email==usuarioIngreso)
  console.log(usuarioSession)
  if (usuarioSession.length > 0){
    setAcceso(!acceso);
    setDatosUsuario(usuarioSession)
    setMsgError('')
  }else{
    setMsgError('Ingrese datos válidos')
  }
}
  return (
    <View style={styles.screen}>
      {
        (acceso)?        
        <ScreenRegister
          datosUsuario={datosUsuario}
        />
        
        :
        <ScreenLogin
          handlePressAcceso={handlePressAcceso}
          handleChangeUsuario={handleChangeUsuario}
          handleChangeClave={handleChangeClave}
          usuarioIngreso={usuarioIngreso}
          claveIngreso={claveIngreso}
        />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingHorizontal:30,
    backgroundColor: '#F0F0F0',
    flex: 1,
    borderColor: '#0A1F49',
    borderWidth: 3,
    borderRadius: 5,
  }
});