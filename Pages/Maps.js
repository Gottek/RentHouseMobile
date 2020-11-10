import React from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export const Maps = (props) => {

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}

                region={{
                    latitude: 50.7818643,
                    longitude: 4.3181763,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.008,
                }}>

            </MapView>


        </View>
    );
}
export const screenOptionMaps = (props) => {
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
