import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import ListTicket from './TicketList';

const Ticket = ({   handleModal }) => {
  const TicketsReserved = useSelector(state => state.tickets.list)
    const renderItem = (data) => (
    <ListTicket handleModal={handleModal}  item={data.item} />
  );

  return (
    <FlatList
      data={TicketsReserved}
      keyExtractor={(val, index) => index}
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