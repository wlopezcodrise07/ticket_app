import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
} from 'react-native';

function OrderModal({
  modalVisible,
  handleConfirmOrder,
}) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>¿Desea Generar la Compra?</Text>
          <View>
            <Button
              onPress={handleConfirmOrder}
              title="CONFIRMAR"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 30,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default OrderModal;