import React from 'react';
import {
  StyleSheet,
  Picker,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
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
        <Picker
            selectedValue={selectedCategory}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => handleChangeCategories(itemValue)}
        >
            {Categories?.map((category) => (
            <Picker.Item label={category.name} value={category.id} />
            ))}
        </Picker>
      </View>
      
      <Text>
        {"\n"}
        </Text>
      <View style={styles.inputContainer}>
        
          <Text style={styles.titleText}>
            Elige Evento
          </Text>  
          <Picker
              selectedValue={selectedEvent}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => handleChangeEvent(itemValue)}
          >
            {eventsFiltered?.map((event) => (
            <Picker.Item label={event.name} value={event.id} />
            ))}
        </Picker>
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
    color : '#0A1F49'
  }
});

export default AddTicket;