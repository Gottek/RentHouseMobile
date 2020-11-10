import React from 'react';
import {StyleSheet, Text, View,Image} from "react-native";
import {SectionProfile} from "../Components/SectionProfile";
import {Button, Divider} from 'react-native-paper';
import Colors from "../Constants/Colors";
import {getAllHomes, selectOwnHome} from "../Store/Actions/HomeActions";
import {useDispatch, useSelector} from "react-redux";
import {activeDarkTheme, activeNotif} from "../Store/Actions/UsersActions";


export default function Profile(props){

    const dispatch=useDispatch();
    const cuurentID=useSelector(state=>state.reducerUserKey.currentID);
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    // const personArray=useSelector(state=>state.reducerUserKey.allClients);

    // const person = personArray.find(p => p.idClient === cuurentID);

    function LogOut(){
        console.log("salut tout le monde");
        props.navigation.navigate('Connexion');
    }

    const ownHomesActive = (valeur) => {
        valeur ? dispatch(selectOwnHome(cuurentID)) : dispatch(getAllHomes());
    }
    const notifActive = (valeur) => {
        dispatch(activeNotif(valeur));
    }

    const ActiveDarkTheme = (valeur) => {
        dispatch(activeDarkTheme(valeur));
    }

    return(
        <View style={[styles.container,{backgroundColor:themeSelf.colors.background}]}>
            <View style={[styles.containerHeader,{backgroundColor:themeSelf.colors.primary}]}>
                <View style={styles.containerImage}>
                    <Image source={require('../assets/Photos/PhotoProfileExample.webp')}
                           style={{width: 150, height: 150, borderRadius: 150/ 2}} />
                </View>
                <View style={styles.containerNomPrenom}>
                    <View >
                        {/*<Text style={styles.containerPrenom}>{person?.name}</Text>*/}
                    </View>
                    <View style={styles.containerNom}>
                        {/*<Text>{person?.surname}</Text>*/}
                        {/*<Text>ID : {cuurentID}</Text>*/}
                    </View>
                </View>
            </View>
            <View style={[styles.containerSecondaire,{backgroundColor:themeSelf.colors.primary}]}>
                <SectionProfile text="Notifactions" onClick={notifActive} default={true} />
                <Divider/>
                <SectionProfile text="Theme sombre" onClick={ActiveDarkTheme} default={true}/>
                <Divider/>
                <SectionProfile text="Tri Activé" onClick={ownHomesActive} default={false}/>
                <Divider/>
                <Button mode='outlined' color={Colors.purpleStyle} onPress={LogOut}>Log out</Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding:30,
        flex:1,
    },
    containerHeader:{
        flexDirection:"row",
        alignItems:"center",
        padding:5,
        borderRadius:10,
        elevation:3
    },
    containerImage:{
        alignItems:"center",
        flex:1
    },
    containerNom:{
    },
    containerPrenom:{
        fontWeight: '400',
        fontSize:20
    },
    containerNomPrenom:{
        alignItems: "center",
        flex:1
    },
    containerSecondaire:{
        flex:1,
        marginTop:10,
        borderRadius:10,
        padding:10,
        elevation:3
    }
});
