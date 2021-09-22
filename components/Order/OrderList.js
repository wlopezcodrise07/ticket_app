import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux'
const ListTicket = ({ item }) => {
  return (
      
    <View style={[styles.item, styles.shadow]}>
      <Text>
        Order: {item.id}
        {"\n"}
        Fecha: {item.date}
        {"\n"}
        Monto:{item.total}
      </Text>
      
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