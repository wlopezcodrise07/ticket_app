import React,{useEffect} from 'react';
import * as Font from 'expo-font'
import {
  StyleSheet,
  Picker,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import ItemPicker from '../Items/ItemPicker';
const AddTicket = ({
  handleChangeEmail,
  handleAddTicket,
  handleChangeCategories,
  handleChangeEvent,
  handleChangeQuantity,
  selectedCategory,
  selectedEvent,
  inputTextQuantity,
  inputTextEmail,
  inputError,
  Categories,
  eventsFiltered

}) => {

  useEffect(() => {
    loadFonts();
})

const loadFonts = async () => {
 await Font.loadAsync({
  'roboto-light':require('../assets/roboto/Roboto-BoldCondensed.ttf')
})
}

  return (
    <React.Fragment>
      
      <Text>
        {"\n"}
        </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>
          Correo
        </Text>          
        <TextInput
          placeholder="Ingresar Correo"
          editable = {false}
          style={styles.input}
          onChangeText={handleChangeEmail}
          value={inputTextEmail}
        />
      </View>
      
      <Text>
        {"\n"}
        </Text>
      <View style={styles.inputContainer}>
        
        <Text style={styles.titleText}>
          Elige Categoria
        </Text>  
        <ItemPicker
            data={Categories}
            selectedValue={selectedCategory}
            ValueChange={handleChangeCategories}
        />
      </View>
      
      <Text>
        {"\n"}
        </Text>
      <View style={styles.inputContainer}>
        
          <Text style={styles.titleText}>
            Elige Evento
          </Text>  
        <ItemPicker
            data={eventsFiltered}
            selectedValue={selectedEvent}
            ValueChange={handleChangeEvent}
        />
      </View>
        <Text>
        {"\n"}
        </Text>
        <View style={styles.inputContainer}>
        <Text style={styles.titleText}>
          # Entradas
        </Text>          
        <TextInput
          placeholder="Ingrese # Entradas"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleChangeQuantity}
          value={inputTextQuantity}
        />
      </View>
      <View>
        <Text>
        {"\n"}
        </Text>
        <Button
              title="AGREGAR"
              color="#0A1F49"
              onPress={handleAddTicket}
            />
      </View>   
        <Text>
        {"\n"}
        </Text>     
      <Text style={styles.inputError}>{inputError}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'center'
  },
  picker: {
    height: 50, 
    width: 150 
  },
  inputError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,

  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color : '#0A1F49',
    fontFamily:'roboto-light'
  }
});

export default AddTicket;