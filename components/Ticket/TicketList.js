import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
const ListTicket = ({ data, Events, handleModal }) => {
  const eventSelected = Events.filter(Event => Event.id==data.item.event)
  console.log() 
  return (
      
    <View style={[styles.item, styles.shadow]}>
      <Text>
        Evento: {eventSelected[0].name}
        {"\n"}
        Fecha: {eventSelected[0].registered_date}
        {"\n"}
        Cant:{data.item.quantity}
      </Text>
      
      <Button
        title="X"
        color="red"
        onPress={() => handleModal(data.item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#0A1F49',
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default ListTicket;