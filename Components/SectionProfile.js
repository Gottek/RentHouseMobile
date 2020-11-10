import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MySwitch from "./Switch";


export const SectionProfile =(props)=>{
    return(
        <View style={styles.MainContainer}>
            <View>
                <Text style={styles.contenuText}>
                    {props.text}
                </Text>
            </View>
            <View>
                <MySwitch onClick={props.onClick} default={props.default} />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    contenuText:{
        fontSize:20
    }
});

