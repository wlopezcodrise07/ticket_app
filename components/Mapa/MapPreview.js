import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const MapPreview = props => {
    const api_key = 'AIzaSyDJE4PtmaQqOTFG7KNTsuV8BgOyUuyupuI'
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
    center=${props.location.lat},${props.location.lng}
    &size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}
    &key=${api_key}`
    return (
        <View style={styles.mapPreview}>
            {props.location
            ?<Image style={styles.mapImage} source={{uri: mapPreviewUrl}}/>
            : (props.children)
            }
        </View>
    )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview : {
        justifyContent : 'center',
        alignItems: 'center',
    },
    mapImage : {
        width:'70%',
        height:'70%',
    }
})
