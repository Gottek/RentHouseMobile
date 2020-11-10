import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {getCurrentPositionAsync} from 'expo-location';


export const LocationSection =(props)=> {

    // const [locationSelected, setLocationSelected] = useState();
    const [fetching, setFetching] = useState(false);

    const geolocalisation = async () => {
        props.navigation('Maps');
        try {
            console.log("salut tout le monde");
            setFetching(true)
            /*const currentLocation = await getCurrentPositionAsync({timeout: 5000})
            setLocationSelected({
                lat: currentLocation.coords.latitude,
                lng: currentLocation.coords.longitude
            });*/

        } catch (error) {
            alert("nous n'avons pas pu charger la map");
        }
        setFetching(false)
    }

    return (
        <View style={styles.locationContainer} >
            {fetching ? <ActivityIndicator size="large" color="red"/> : <Text onPress={geolocalisation}>Choisir une location</Text>}
        </View>);
}

const styles=StyleSheet.create({
    locationContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"black",
        borderStyle:"dashed",
        borderRadius: 7,
        marginBottom:10
    }

});