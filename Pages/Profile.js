import React, {useEffect} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {SectionProfile} from "../Components/SectionProfile";
import {Button, Divider} from 'react-native-paper';
import {getAllHomes, selectOwnHome} from "../Store/Actions/HomeActions";
import {useDispatch, useSelector} from "react-redux";
import {activeDarkTheme, activeNotif} from "../Store/Actions/UsersActions";
import {
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';


export default function Profile(props) {

    const dispatch = useDispatch();
    const cuurentID = useSelector(state => state.reducerUserKey.currentID);
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    useEffect(() => {
        lor(this)
    })
    const personArray=useSelector(state=>state.reducerUserKey.allClients);

    const person = personArray.find(p => p.idClient === cuurentID);

    function LogOut() {
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
    const { height } = Dimensions.get('window');

    return (

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:height}}>
            <View style={[styles.container, {backgroundColor: themeSelf.colors.background}]}>

                <View style={[styles.containerHeader, {backgroundColor: themeSelf.colors.primary}]}>
                    <View style={styles.containerImage}>
                        <Image source={require('../assets/Photos/PhotoProfileExample.webp')}
                               style={{width: wp('38%'), height: hp('20%'), borderRadius: hp('20%') / 2}}/>
                    </View>
                    <View style={styles.containerNomPrenom}>
                        <View>
                            <Text style={{...styles.containerPrenom,color: themeSelf.colors.textColor}}>{person?.name}</Text>
                        </View>
                        <View style={styles.containerNom}>
                            <Text style={{color:themeSelf.colors.textColor}}>{person?.surname}</Text>
                            <Text style={{color:themeSelf.colors.textColor}}>ID : {cuurentID}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.containerSecondaire, {backgroundColor: themeSelf.colors.primary}]}>
                    <SectionProfile text="Notifactions" onClick={notifActive} default={true}/>
                    <Divider/>
                    <SectionProfile text="Theme sombre" onClick={ActiveDarkTheme} default={true}/>
                    <Divider/>
                    <SectionProfile text="Tri Activé" onClick={ownHomesActive} default={false}/>
                    <Divider/>
                    <Button mode='contained' color={themeSelf.colors.accent} onPress={LogOut}>Log out</Button>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: hp('3%'),
        flex: 1,
    },
    containerHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: hp('0.5%'),
        borderRadius: hp('1%'),
        elevation: 3
    },
    containerImage: {
        alignItems: "center",
        flex: 1
    },
    containerNom: {},
    containerPrenom: {
        fontWeight: '400',
        fontSize: 20
    },
    containerNomPrenom: {
        alignItems: "center",
        flex: 1
    },
    containerSecondaire: {
        flex: 1,
        marginTop: hp('1%'),
        borderRadius: hp('1%'),
        padding: hp('1%'),
        elevation: 3
    }
});
