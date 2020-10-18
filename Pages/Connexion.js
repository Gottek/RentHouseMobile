import PersoInput from "../Components/PersoInput";
import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {Button, TextInput} from 'react-native-paper';
import Colors from "../Constants/Colors";
import {TouchableWithoutFeedback, Keyboard} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { CommonActions } from '@react-navigation/native';
import {getAllProperties} from "../Api/api";
import {getAllHomes} from "../Store/Actions/HomeActions";

export default function ProfilesPage(props){

    const currentUser = useSelector(state=>state.reducerUserKey.userName)

    const dispatch = useDispatch();

    async function checkUserInput(){
        const data = await getAllProperties();
        dispatch( getAllHomes( data ))
        props.navigation.replace('Home');
    }

    /*
    const salut =()=>{console.log("bonjour")}
    const objet={
        functionA:salut //functionA contient la reference de la methode salut
    }
    //const nop=()=>objet.functionA // pas de reference de methode dans une fonction fléchée
    const nop=(args)=> { // seulement de l'executable
        console.log(args)
        objet.functionA()
    }
    const saluttt=nop; //saluttt est en tout point égal à nop
    // const checkUserInput=saluttt(); // mettre un appel de methode sans fonction fléché va l'executer directement
    const checkUserInput=()=>saluttt("oui oui"); // demander à salutttt de s'executer c'est demander à nop de s'executer

     */

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

            <View style={styles.container}>
                <PersoInput texto={"Email"}/>
                <PersoInput texto={"Mot de passe"}/>
                <Button mode='outlined' color={Colors.purpleStyle} onPress={checkUserInput}>Valider</Button>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        flex:1,
        justifyContent:'space-around'
    }
});