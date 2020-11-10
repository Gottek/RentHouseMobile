import React, {useEffect, useRef, useState} from "react";
import {Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Picker} from '@react-native-community/picker';
import PersoInput from "../Components/PersoInput";
import {Button, Card} from "react-native-paper";
import MyCheckBox from "../Components/MyCheckBox";
import {LocationSection} from "../Components/LocationSection";
import Home from "../Models/Home";
import {addHome} from "../Store/Actions/HomeActions";
import * as Notifications from 'expo-notifications';
import {useDispatch, useSelector} from "react-redux";
import MyImagePicker from "../Components/MyImagePicker";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


export const Add =(props)=> {

    const dispatch=useDispatch();
    const displayNotif=useSelector(state=>state.reducerUserKey.notif);
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
    const currentID = useSelector(state => state.reducerUserKey.currentID);

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
        idProprio:currentID, //Propriétaire par défaut a changer
    }

    const [state,setState] = React.useState(stateDefaultValues);


    async function sendToHome(){

        displayNotif ? await schedulePushNotification():'';
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
    const ListeTypes = React.forwardRef((props,ref) => (
        <Picker
            ref={ref}
            selectedValue={state.type}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
                setState({...state, type: itemValue})
            }>
            <Picker.Item label="Maison" value="house" />
            <Picker.Item label="Appart" value="flat" />
            <Picker.Item label="Chambre" value="room" />
        </Picker>
    ));
    const ref = React.createRef();

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <KeyboardAvoidingView behavior={"Height"} style={[styles.mainContainer,{backgroundColor:themeSelf.colors.background}]}>
                <Card style={[styles.cardContainer,{backgroundColor:themeSelf.colors.background}]}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                        <View style={[styles.mainViewContainer,{backgroundColor:themeSelf.colors.primary}]}>
                            <MyImagePicker themeSelf={themeSelf} onImageTaken={(uriFromDevice)=>setState({...state, imageLink: uriFromDevice})}/>
                            <View style={styles.homeName}>
                                <PersoInput texto={"Description de la maison"} getText={(text)=>setState({...state,description: text})} valeur={state.description}/>
                            </View>
                            <View style={styles.homeName}>
                                <PersoInput texto={"Adresse"} getText={(text)=>setState({...state, adress: text})} valeur={state.adress}/>
                            </View>
                            <View style={styles.prixChambreContainer}>

                                <PersoInput texto={"Prix"} getText={(text)=>setState({...state, rentCost: text})} valeur={state.rentCost.toString()}/>
                                <ListeTypes ref={ref} />

                            </View>
                            <View style={styles.checkBoxContainer}>
                                <PersoInput texto={"Aire Totale"} getText={(text)=>setState({...state, totalArea: text})} valeur={state.totalArea.toString()}/>
                                <PersoInput texto={"Charges fixes"} getText={(text)=>setState({...state, fixedChargesCost: text})} valeur={state.fixedChargesCost.toString()}/>

                                <View style={styles.textCheck}>
                                    <MyCheckBox getChecked={(text)=>setState({...state, isCurrentlyRented:text})} valeur={state.isCurrentlyRented}/>
                                    <Text>Actuellement loué ?</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <LocationSection navigation={props.navigation.navigate}/>
                                <Button
                                    style={{flex:1,marginBottom: 10,backgroundColor:themeSelf.colors.accent}}
                                    mode="contained"
                                    color={themeSelf.colors.accent}
                                    onPress={sendToHome}>Poster
                                </Button>
                            </View>

                        </View>
                    </ScrollView>
                </Card>
            </KeyboardAvoidingView>
        </ScrollView>
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