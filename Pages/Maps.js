import React from 'react';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
// import { MapView } from 'expo';
export const Maps = (props) => {

    const nvlleLat = props.latitude!==0?props.latitude:50.81950043121481;
    const nvlleLong = props.longitude!==0?props.longitude:4.394311459132513;

    const myMap = {
        latitude: nvlleLat,
        longitude: nvlleLong,
        latitudeDelta: 0.025,
        longitudeDelta: 0.04
    }
    const [mapRegion,setMapRegion] = React.useState(myMap);

    console.log("myMap")
    console.log(myMap)
    const handleRegionChange = region => {
        setMapRegion(region)
    }
    return (
            <MapView
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                style={{flex:1}}
                region={mapRegion}
                onRegionChange={handleRegionChange}
            />
    );
}
