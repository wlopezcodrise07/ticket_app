import React,{useState,useEffect} from 'react'
import Modal from '../../components/ModalDelete';
import ModalOrder from '../../components/ModalConfirmOrder';
import Ticket from '../../components/Ticket';
import { Button, StyleSheet, Text, View } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import { removeTicket, saveOrder } from '../../store/actions/reserved.action';
import { bounce } from 'react-native/Libraries/Animated/src/Easing';

import { getTicketsReserved } from '../../store/actions/reserved.action';
export default function ScreenDetail({navigation}) {

    const dispatch = useDispatch()
    const [ticketSelected, setTicketSelected] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleOrder, setModalVisibleOrder] = useState(false);
    const TicketsReserved = useSelector(state => state.tickets.list)
    const usuarioSession = useSelector(state => state.users.userSession)
    useEffect(() => {
      dispatch(getTicketsReserved(usuarioSession[0].email));
  }, []);
    const handleConfirmDelete = () => {
      const id = ticketSelected;
      dispatch(removeTicket(id,usuarioSession[0].email))
      setModalVisible(false);
      setTicketSelected({});
    }
  
    const handleModal = id => {
      setTicketSelected(id);
      setModalVisible(true);
    }
    const handleModalOrder = () => {
      setModalVisibleOrder(true);
    }
    const handleConfirmOrder = () =>{
      console.log(TicketsReserved)
      dispatch(saveOrder(usuarioSession[0].email,TicketsReserved))
      setModalVisibleOrder(false);
    }
    return (
        <View style={styles.screen}>
          
          { TicketsReserved.length!=0?
          
          <View>   
           <Ticket
               handleModal={handleModal}
               TicketsReserved={TicketsReserved}
           />
           <Button
             onPress={handleModalOrder}
             title="Confirmar Compra"
           />
           <Modal
               modalVisible={modalVisible}
               handleConfirmDelete={handleConfirmDelete}
               ticketSelected={ticketSelected}
           />
           <ModalOrder
               modalVisible={modalVisibleOrder}
               handleConfirmOrder={handleConfirmOrder}
           />
           </View>
            :
            <View>
              <Text style={styles.titleScreen}>Dirígete a la vista de Comprar Tickets para realizar tu compra </Text>
            </View>}
          
        </View>
    )
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
  },
  titleScreen: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    color : '#0A1F49',
    paddingVertical:20,
  }
});