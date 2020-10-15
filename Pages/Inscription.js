import {StyleSheet, View} from "react-native";
import PersoInput from "../Components/PersoInput";
import {Button} from "react-native-paper";
import React from "react";
import Colors from "../Constants/Colors";
import {useDispatch} from "react-redux";
import {getAllProperties} from '../Api/api';

export default function Inscription(props) {

    const dispatch = useDispatch();

    function checkUserInput(){
        dispatch( getAllHomes( getAllProperties() ))
        props.navigation.replace('Home');
    }

    return (
        <View style={styles.container}>
            <PersoInput texto={"Nom"}/>
            <PersoInput texto={"Prenom"}/>
            <PersoInput texto={"Email"}/>
            <PersoInput texto={"Mot de passe"}/>
            <Button mode='outlined' color={Colors.purpleStyle} onPress={checkUserInput}>Valider</Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding:30,
        flex:1,
        justifyContent:'space-around'
    }
});