import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import AddTicket from '../components/AddTicket';
import Modal from '../components/ModalConfirmAdded';
import {useSelector,useDispatch} from 'react-redux'
import { selectedCategory } from '../store/actions/category.actions';
import { filterEvents, selectEvent } from '../store/actions/event.action';
import { addTicket } from '../store/actions/reserved.action';

const ScreenRegister = ({navigation}) => {
     const dispatch = useDispatch()
    const Categories = useSelector(state => state.categories.list)
    const selectedCategoryf = useSelector(state => state.categories.selectedCategory)
    const eventsFiltered = useSelector(state => state.events.filteredEvents)
    const selectedEvent = useSelector(state => state.events.selectedEvent)
    const userSession = useSelector(state => state.users.userSession)
    const TicketsReserved = useSelector(state => state.tickets.list)
    const [inputTextEmail, setInputTextEmail] = useState(userSession[0].email);
    const [inputTextQuantity, setInputTextQuantity] = useState('0'); 
    const [inputError, setInputError] = useState('');
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
      const data = [{
          "id": Math.random().toString(),
          "email": inputTextEmail,
          "event": selectedEvent,
          "quantity": inputTextQuantity,
      }]
      setModalVisible(true);      
      dispatch(addTicket(data))

    }
    const handleChangeCategories = (value) => {
      dispatch(selectedCategory(value))
      dispatch(filterEvents(value))
    }
    const handleChangeEvent = (value) => {
      dispatch(selectEvent(value))
    }
    const handleChangeQuantity = (value) => {
      setInputTextQuantity(value)
    }
    const handlePressDetail = () => {
      navigation.navigate('Details');
    }
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
      setModalVisible(false);
      setInputTextQuantity('0'); 

    }
  
    return (
        <View style={styles.screen}>
          
          <View>
                <Text style={styles.titleScreen}>Hola {userSession[0].name}!!</Text>
            </View>
            <AddTicket
                handleChangeEmail={handleChangeEmail}
                handleAddTicket={handleAddTicket}
                handleChangeCategories={handleChangeCategories}
                handleChangeEvent={handleChangeEvent}
                handleChangeQuantity={handleChangeQuantity}
                selectedCategory={selectedCategoryf}
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
    }
  });