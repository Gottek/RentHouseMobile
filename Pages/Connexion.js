import PersoInput from "../Components/PersoInput";
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import {Button} from 'react-native-paper';
import Colors from "../Constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import Home from "../Models/Home";
import {getAllMyClients, setCurrentUserID} from "../Store/Actions/UsersActions";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getAllHomes} from "../Store/Actions/HomeActions";
import {getAllClientAPI} from "../Api/api";

export default function ProfilesPage(props){
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    const dispatch = useDispatch();

    const [idcurrentUser, setidcurrentUser] = React.useState(-1);
    const [inputsOK, setInputsOK] = React.useState(false);
    const [allClients,setAllClients] = React.useState({});
    const [userInput,setUserInput] = React.useState({
        name:"",
        codePostal:""
    });

    React.useEffect(()=>{
        const fetchHomes = async () =>{
            await dispatch( getAllHomes() ) ;
        }
        const fetchClients = async () =>{
            await dispatch( getAllMyClients() );
            const cli = await getAllClientAPI();
            setAllClients(cli);
            console.log(cli);
        }
        fetchHomes().then(console.log("Fetch homes OK"));
        fetchClients().then(console.log("Fetch clients OK")).catch(err => console.log(err));
    },[])

    async function checkUserInput(){
        await checkUserData();
        if(inputsOK){
            await dispatch( setCurrentUserID(idcurrentUser) )
            props.navigation.replace('Home');
        }
        else{
            console.log("Pas ok")
        }
    }

    const checkUserData = () => {

        allClients.map( (object, index) => {

            console.log(object.name)
            console.log(object.postalCode)
            console.log(userInput.name)
            console.log(userInput.codePostal)

            let correctName = object.name;
            let correctPostal = object.postalCode;
            let idCurrent = object.idClient;

            if(correctName === userInput.name && correctPostal === userInput.codePostal){
                setInputsOK(true);
                setidcurrentUser(idCurrent);
            }

            console.log(inputsOK);

        })
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

            <View style={[styles.container,{backgroundColor:themeSelf.colors.background}]}>
                <PersoInput texto={"Email"} valeur={userInput.name} getText={(t) => setUserInput({...userInput,name: t}) }/>
                <PersoInput texto={"Mot de passe"} valeur={userInput.postalCode} getText={(t) => setUserInput({...userInput,codePostal: t})} />
                <Button mode='contained' color={themeSelf.colors.accent} onPress={checkUserInput}>Valider</Button>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:hp('3%'),
        flex:1,
        justifyContent:'space-around'
    }
});
