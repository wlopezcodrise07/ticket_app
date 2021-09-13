import React,{useState} from 'react'
import Modal from '../components/ModalDelete';
import Ticket from '../components/Ticket';
import { StyleSheet, Text, View } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import { removeTicket } from '../store/actions/reserved.action';
export default function ScreenDetail({navigation}) {

    const dispatch = useDispatch()
    const [ticketSelected, setTicketSelected] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const handleConfirmDelete = () => {
      const id = ticketSelected;
      dispatch(removeTicket(id))
      setModalVisible(false);
      setTicketSelected({});
    }
  
    const handleModal = id => {
      setTicketSelected(id);
      setModalVisible(true);
    }
    return (
        <View>
        <Ticket
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