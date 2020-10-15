import {StyleSheet, View,Text} from "react-native";
import PersoInput from "../Components/PersoInput";
import {Button, DarkTheme,Card} from "react-native-paper";
import React, {useEffect, useState} from "react";
import {ScrollView} from "react-native";
import {KeyboardAvoidingView} from "react-native";
import MyImagePicker from "../Components/MyImagePicker";
import MySwitch from "../Components/Switch";
import {Dimensions} from 'react-native';
import MyCheckBox from "../Components/MyCheckBox";
import {LocationSection} from "../Components/LocationSection";
import Home from "../Models/Home";
import {useDispatch} from "react-redux";
import {addHome} from "../Store/Actions/HomeActions";



export const Add =(props)=> {

    const [userLocation,setUserLocation] = useState();
    const [price,setPrice] = useState('0');
    const [id,setId] = useState(Math.random().toString());
    const [room,setRoom] = useState('0');
    const [name,setName] = useState("");
    const [photoUri,setPhotoUri] = useState("");
    const [wifi,setWifi] = useState(false);
    const [eauChaude,setEauChaude] = useState(false);
    const [hammame,setHammame] = useState(false);

    const dispatch=useDispatch();

    function sendToHome(){
        dispatch(addHome({id,name,price,room,wifi,eauChaude,hammame,photoUri}))
        clean()
        props.navigation.navigate('Home')
    }
    const clean=()=>{
        setWifi(false);
        setRoom('0');
        setPrice('0');
        setName("");
        setHammame(false);
        setEauChaude(false)
        setPhotoUri('')
    }
    const currentLocation=props.route.params;
    const { height } = Dimensions.get('window');


    useEffect(()=>{
        if(currentLocation)setUserLocation(currentLocation)
    },[currentLocation])

    return (
        <KeyboardAvoidingView  behavior={"Height"} style={styles.mainContainer}>
            <Card style={styles.cardContainer}>
                <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{height:height+height/3}}>
                    <View style={styles.mainViewContainer}>
                        <MyImagePicker onImageTaken={(uriFromDevice)=>setPhotoUri(uriFromDevice)}/>
                        <View style={styles.homeName}>
                            <PersoInput texto={"Nom de la maison"} getText={(text)=>setName(text)} valeur={name}/>
                        </View>
                        <View style={styles.prixChambreContainer}>
                            <PersoInput texto={"Prix"} getText={(text)=>setPrice(text)} valeur={price}/>
                            <PersoInput texto={"Chambre"} getText={(text)=>setRoom(text)} valeur={room}/>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <View style={styles.textCheck}>
                                <MyCheckBox getChecked={(text)=>setWifi(text)} valeur={wifi}/>
                                <Text>WI-FI</Text>
                            </View>
                            <View style={styles.textCheck}>
                                <MyCheckBox getChecked={(text)=>setEauChaude(text)} valeur={eauChaude}/>
                                <Text>Eau chaude</Text>
                            </View>
                            <View style={styles.textCheck}>
                                <MyCheckBox getChecked={(text)=>setHammame(text)} valeur={hammame}/>
                                <Text>Hammam</Text>
                            </View>
                        </View>
                        <LocationSection  navigation={props.navigation.navigate}/>
                        <Button style={{marginBottom: 10}} mode="contained" color="#8e44ad"
                                onPress={sendToHome}>Poster</Button>
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        paddingTop:20,
        paddingHorizontal:20,
        flex:1,
        justifyContent:"center"
    },
    prixChambreContainer:{
        alignItems:"center",
        flex:1,

        flexDirection:"row"
    },
    textCheck:{
        flexDirection: "column",
        alignItems:"center",
        flex:1

    },
    checkBoxContainer:{
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
        marginBottom:10,
        flex:1

    },
    mainViewContainer:{
        flex:1
    },
    homeName:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    cardContainer:{
        padding:10,
        marginBottom:10,
        elevation:5
    }
});