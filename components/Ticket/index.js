import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ListTicket from './TicketList';

const Ticket = ({ TicketList, Events, handleModal }) => {
  return (
    <FlatList
      data={TicketList}
      renderItem={(data) => <ListTicket handleModal={handleModal} Events={Events}  data={data} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
  },
});

export default Ticket;