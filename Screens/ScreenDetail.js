import React,{useState} from 'react'
import Modal from '../components/ModalDelete';
import Ticket from '../components/Ticket';
import { StyleSheet, Text, View } from 'react-native'
import Events from '../Data/Events'

export default function ScreenDetail({route,navigation}) {
    const { TicketList } = route.params;
    const [ticketSelected, setTicketSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
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
        <View>
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
        </View>
    )
}

const styles = StyleSheet.create({


  });