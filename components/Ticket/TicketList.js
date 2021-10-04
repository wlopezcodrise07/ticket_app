import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux'
const ListTicket = ({ item,  handleModal }) => {
  const Events = useSelector(state => state.events.list)
  const eventSelected = Events.filter(x => x.id===item.event)
  return (
      
    <View style={[styles.item, styles.shadow]}>
      <Text>
        Evento: {eventSelected[0].name}
        {"\n"}
        Fecha: {eventSelected[0].registered_date}
        {"\n"}
        Cant:{item.quantity}
      </Text>
      
      <Button
        title="X"
        color="red"
        onPress={() => handleModal(item.id)}
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