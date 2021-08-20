import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Modal from './components/Modal';
import Ticket from './components/Ticket';
import AddTicket from './components/AddTicket';
import Events from './Data/Events'
import Categories from './Data/Categories'
export default function App() {
  const [inputTextEmail, setInputTextEmail] = useState('');
  const [inputTextQuantity, setInputTextQuantity] = useState(0); 
  const [eventsFiltered, setEventsFiltered] = useState(Events.filter(p => p.category == 1))
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(1);
  const [inputError, setInputError] = useState('');
  const [TicketList, setTicketList] = useState([]);
  const [ticketSelected, setTicketSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
  const handleConfirmDelete = () => {
    const id = ticketSelected.id;
    setTicketList(TicketList.filter(item => item.id !== id));
    setModalVisible(false);
    setTicketSelected({});
  }

  const handleModal = id => {
    setTicketSelected(TicketList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
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
      <Ticket
        TicketList={TicketList}
        Events={Events}
        handleModal={handleModal}
      />
      <Modal
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        ticketSelected={ticketSelected}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
    borderColor: '#0A1F49',
    borderWidth: 3,
    borderRadius: 5,
  }
});