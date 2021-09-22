import React,{useEffect,useState} from 'react'
import * as Font from 'expo-font'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import {useSelector,useDispatch,connect} from 'react-redux'
import { loginUser } from '../../store/actions/user.action'
import { insertCategory, removeCategory, updateCategory } from '../../store/actions/category.actions'
const ScreenLogin = ({navigation}) => {
  const dispatch = useDispatch()

  const Users = useSelector(state => state.users.list)
  
const [usuarioIngreso, setUsuarioIngreso] = useState('');
const [claveIngreso, setClaveIngreso] = useState('');
const [msgError,setMsgError] = useState('')
const handleChangeUsuario = (text) => {
  setUsuarioIngreso(text)
}
const handleChangeClave = (text) => {
  setClaveIngreso(text)
}
const handlePressAcceso = () => {
  setMsgError('')
  const usuarioSession = Users.filter(usuario => usuario.password ==claveIngreso && usuario.email==usuarioIngreso)
  if (usuarioSession.length > 0){
    dispatch(loginUser(usuarioSession))
    setMsgError('')
  }else{
    setMsgError('Ingrese datos válidos')
  }
}  




    return (
    <React.Fragment>

        <View style={styles.screen}>
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
                autoCompleteType='email'
                keyboardType='email-address'
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
                autoCompleteType='password'
                secureTextEntry={true}
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