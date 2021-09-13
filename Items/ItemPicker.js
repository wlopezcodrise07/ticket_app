import React from 'react'
import { StyleSheet, Picker, View } from 'react-native'

const  ItemPicker =({data,selectedValue,ValueChange}) => {
    return (
        <View>
             
        <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => ValueChange(itemValue)}
        >
            {data?.map((x) => (
            <Picker.Item  key={x.id} label={x.name} value={x.id} /> 
            ))}
        </Picker> 
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
      height: 50, 
      width: 150 
    }})

    export default ItemPicker;