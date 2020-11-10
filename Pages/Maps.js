import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
// import MapView, {Marker} from "react-native-maps";

export const Maps = (props)=>{

    const [location,setLocation]=useState();

    const mapOrigin={
        latitude:50.818104,
        longitude:4.397081,
        latitudeDelta:0.005,
        longitudeDelta:0.02
    }

   const saveLocation=useCallback(()=>{
       if(!location) return
       props.navigation.navigate('Add',{posLocation:location})
   },[location]);


    useEffect(()=>{
        props.navigation.setParams({locationSaved:saveLocation})
    },[saveLocation])

    const AddMaker =event=>{
        setLocation({
            latitude:event.nativeEvent.coordinate.latitude,
            longitude:event.nativeEvent.coordinate.longitude
        })
    }
    let coordMarker;

    if(location) coordMarker={
        latitude:location.latitude,
        longitude:location.longitude
    }

    return (
        <MapView  style={styles.map} region={mapOrigin} onPress={AddMaker}>
            {coordMarker && <Marker title={"Endroit selectionné"} coordinate={coordMarker}/>}
        </MapView>
    );
}
export const screenOptionMaps=(props)=>{
    //const fonctionRappel=()=>{return (props.route.params.locationSaved)} //pourquoi ça ne marche pas ?
    const fonctionRappel=()=>props.route.params.locationSaved() // et là ca marche
    const feature ={
        headerRight: () => (<TouchableOpacity style={{marginRight:20}} onPress={fonctionRappel}><Text style={styles.texto}>Save</Text></TouchableOpacity>)
    }
    return feature;
}


const styles=StyleSheet.create({
    map:{
        flex:1
    },
    texto:{
        color:"red"
    }
})
