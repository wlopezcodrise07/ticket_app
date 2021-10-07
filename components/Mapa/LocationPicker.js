import React, {useState,useEffect} from 'react'
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View,Dimensions, } from 'react-native'
import * as Location from 'expo-location'
import {useNavigation} from '@react-navigation/native'
import MapView,{Marker} from 'react-native-maps'
import {useSelector,useDispatch} from 'react-redux'
import MapPreview from './MapPreview';
import { buscarEventos } from '../../store/actions/user.action'
const LocationPicker = props => {
    const dispatch = useDispatch()

    const [selectedLocation,setSelectedLocation] = useState()
    const [pickedLocation,setPickedLocation] = useState();
    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de localización para la app',
                [{text: 'OK'}]
            );
            return false;
        }
        return true;
    }
    const initialRegion = {
        latitude : -12.1913474,
        longitude : -76.9614165,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421,
    }
    const getLocationHandler = async () => {
        const isLocationOk = await verifyPermissions();

        if (!isLocationOk){
            return;
        }
        try {
            const location = await Location.getCurrentPositionAsync({
                timeout : 5000
            });
            console.log(location)
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        } catch (error) {
            Alert.alert(
                'No se pudo obtener la localización',
                'Por favor intente nuevamente.',
                [{text:'OK'}]
             )
        }
    }
    const handleSelectLocation = event => {
        setSelectedLocation({
            lat : event.nativeEvent.coordinate.latitude,
            lng : event.nativeEvent.coordinate.longitude,
        })
        dispatch(buscarEventos(event.nativeEvent.coordinate.latitude,event.nativeEvent.coordinate.longitude))

    }
    let markerCoordinates;
    if(selectedLocation) {
        markerCoordinates = {
            latitude : selectedLocation.lat,
            longitude : selectedLocation.lng
        }
    }
    return (
        
    <View style={styles.container}>
      <MapView 
      initialRegion={initialRegion}
      style={styles.map} 
      onPress={handleSelectLocation} >
          {markerCoordinates && <Marker title="Ubicación seleccionado" coordinate={markerCoordinates} />}
      </MapView>
    </View>
    )
}

export default LocationPicker

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
