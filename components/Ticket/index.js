import React,{useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import ListTicket from './TicketList';

const Ticket = ({   handleModal,TicketsReserved }) => {
     const dispatch = useDispatch()

  const userSession = useSelector(state => state.users.userSession)
    const renderItem = (data) => (
    <ListTicket handleModal={handleModal}  item={data.item} />
  );

  console.log(TicketsReserved)
  return (
    <FlatList
      data={TicketsReserved}
      keyExtractor={(val, index) => val.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default Ticket;