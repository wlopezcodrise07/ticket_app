import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import AddTicket from '../components/AddTicket';
import Modal from '../components/ModalConfirmAdded';
import Events from '../Data/Events';
import Categories from '../Data/Categories';

const ScreenRegister = ({navigation}) => {
    const [inputTextEmail, setInputTextEmail] = useState('test@example.com');
    const [inputTextQuantity, setInputTextQuantity] = useState('0'); 
    const [eventsFiltered, setEventsFiltered] = useState(Events.filter(p => p.category == 1))
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [selectedEvent, setSelectedEvent] = useState(1);
    const [inputError, setInputError] = useState('');
    const [TicketList, setTicketList] = useState([]);
    const handleChangeEmail = (text) => {
      setInputTextEmail(text);
      setInputError('');
    };
  
    const handleAddTicket = () => {
      setInputError('');
      if(inputTextEmail==''){
      setInputError('Ingrese un correo valido');
      return
      }
      if(inputTextQuantity==0 || inputTextQuantity==''){
      setInputError('Ingrese una cantidad mayor a 0');
      return
      }
      const data = {
          "id": Math.random().toString(),
          "email": inputTextEmail,
          "event": selectedEvent,
          "quantity": inputTextQuantity,
      }
      setModalVisible(true);
      setTicketList([...TicketList,data]);
    }
    const handleChangeCategories = (value) => {
      setSelectedCategory(value)
      const arrayEvent = Events.filter(p => p.category == value)
      setEventsFiltered(arrayEvent)
      const arrayEventid = arrayEvent.find(element=>element.id>0)
      setSelectedEvent(arrayEventid.id)
  
    }
    const handleChangeEvent = (value) => {
      setSelectedEvent(value)
    }
    const handleChangeQuantity = (value) => {
      setInputTextQuantity(value)
    }
    const handlePressDetail = () => {
      navigation.navigate('Details', {
        TicketList: TicketList,
      });
    }
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
      setModalVisible(false);
      setInputTextQuantity('0'); 

    }
  
    return (
        <View style={styles.screen}>
          
          <View>
                <Text style={styles.titleScreen}>Hola William Lopez!!</Text>
            </View>
            <AddTicket
                handleChangeEmail={handleChangeEmail}
                handleAddTicket={handleAddTicket}
                handleChangeCategories={handleChangeCategories}
                handleChangeEvent={handleChangeEvent}
                handleChangeQuantity={handleChangeQuantity}
                selectedCategory={selectedCategory}
                selectedEvent={selectedEvent}
                inputError={inputError}
                inputTextEmail={inputTextEmail}
                inputTextQuantity={inputTextQuantity}
                Categories={Categories}
                eventsFiltered={eventsFiltered}
            />
            <Button
              title="Ver Detalle"
              onPress={handlePressDetail}
            />
            <Modal
                modalVisible={modalVisible}
                handleConfirm={handleConfirm}
            />
        </View>
       )
}

export default ScreenRegister

const styles = StyleSheet.create({
    screen: {
      padding: 30,
      backgroundColor: '#F0F0F0',
      flex: 1,
      borderColor: '#0A1F49',
      borderWidth: 3,
      borderRadius: 5,
    },
    titleScreen: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
      color : '#0A1F49',
      paddingVertical:20,
      fontFamily:'roboto-light'
    }
  });