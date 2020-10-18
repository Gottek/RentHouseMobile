import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, View,Text} from "react-native";
import {Picker} from '@react-native-community/picker';
import PersoInput from "../Components/PersoInput";
import {Button, DarkTheme, Card, TextInput} from "react-native-paper";
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
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


export const Add =(props)=> {

    const dispatch=useDispatch();

    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    const [userLocation,setUserLocation] = useState(null);

    const stateDefaultValues = {

        description:"Belle maison tout ça tout ça",
        adress: "Rue Okay",
        type: 'house',
        totalArea: 138,
        rentCost:764,
        fixedChargesCost:324,
        imageLink:"",
        isCurrentlyRented:false,
    }

    const [state,setState] = React.useState(stateDefaultValues);


    async function sendToHome(){
        await schedulePushNotification();
        dispatch(addHome(state))
        clean();
        props.navigation.navigate('Home');
    }
    const clean=()=>{
        setState(stateDefaultValues);
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
                        {/*<MyImagePicker onImageTaken={(uriFromDevice)=>setState({...state, imageLink: uriFromDevice})}/>*/}
                        <View style={styles.homeName}>
                            <PersoInput texto={"Description de la maison"} getText={(text)=>setState({...state,description: text})} valeur={state.description}/>
                        </View>
                        <View style={styles.homeName}>
                            <PersoInput texto={"Adresse"} getText={(text)=>setState({...state, adress: text})} valeur={state.adress}/>
                        </View>
                        <View style={styles.prixChambreContainer}>
                            <PersoInput texto={"Prix"} getText={(text)=>setState({...state, rentCost: text})} valeur={state.rentCost.toString()}/>
                            <Picker
                                selectedValue={state.type}
                                style={{height: 50, width: 100}}
                                onValueChange={(itemValue, itemIndex) =>
                                    setState({...state, type: itemValue})
                                }>
                                <Picker.Item label="Maison" value="house" />
                                <Picker.Item label="Appart" value="flat" />
                                <Picker.Item label="Chambre" value="room" />
                            </Picker>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <PersoInput texto={"Aire Totale"} getText={(text)=>setState({...state, totalArea: text})} valeur={state.totalArea.toString()}/>
                            <PersoInput texto={"Charges fixes"} getText={(text)=>setState({...state, fixedChargesCost: text})} valeur={state.fixedChargesCost.toString()}/>

                            <View style={styles.textCheck}>
                                <MyCheckBox getChecked={(text)=>setState({...state, isCurrentlyRented:text})} valeur={state.isCurrentlyRented}/>
                                <Text>Actuellement loué ?</Text>
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
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Home ajouté ! ",
            body: "Vous la retrouverez sur la page d'accueil...",
            // data: { data: 'goes ' },
        },
        trigger: { seconds: 1 },
    });
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