import {Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Button, Card, Snackbar} from "react-native-paper";
import PersoInput from "../Components/PersoInput";
import MyCheckBox from "../Components/MyCheckBox";
import {useDispatch, useSelector} from "react-redux";
import {deleteHomebyID, updateOneHome} from "../Store/Actions/HomeActions";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Maps} from "./Maps";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export default function HomeDetails (props){

    const dispatch=useDispatch();
    //je parcours ma liste de maison à la rechercher de la maison qui porte le même id que la maison où j'ai cliqué

    const idHome=props.route.params?.idHome;
    const isAdmin = props.route.params?.isAdmin;

    const singleHome=useSelector(state=>state.reducerHomeKey.allHomes.find(home=>home.idProperty===idHome));
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    const [state, setState] = React.useState(singleHome);
    const defaultImageURL = state.imageLink?state.imageLink:"https://i.ytimg.com/vi/cA2cYo86Kws/maxresdefault.jpg";
    console.log("singleHome")
    console.log(singleHome)

    const { height } = Dimensions.get('window');

    //SnackBar
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    //pas besoin de clean le state, il se fait détruire quand tu change de page
    async function updatePost(){
        //requete vers le store
        await dispatch( updateOneHome(state));
        props.navigation.goBack();
    }
    async function deletePost(){
        //requete vers le store
        await dispatch( deleteHomebyID(state.idProperty));
        props.navigation.goBack();
    }

    const handleChangeIsRented = () => {
        setState( {...state, isCurrentlyRented: !state.isCurrentlyRented} );
    }

    return(
        <KeyboardAvoidingView behavior={"Height"} style={[styles.mainContainer,{backgroundColor:themeSelf.colors.background}]}>
            <Card style={{...styles.cardContainer, backgroundColor: themeSelf.colors.primary}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:height+height/3}}>
                    <View style={[styles.mainViewContainer,{backgroundColor:themeSelf.colors.primary}]}>
                        <View>
                            <Image style={styles.imageStyle} source={{ uri: defaultImageURL}}/>
                        </View>
                        <View style={styles.homeName}>
                            <PersoInput disabled={!isAdmin} name={"description"} getText={(text)=>setState({...state, description: text})} texto={"Description de la maison"} valeur={state.description} />
                        </View>
                        <View style={styles.homeName}>
                            <PersoInput disabled={!isAdmin} name={"adress"} getText={(text)=>setState({...state, adress: text})} texto={"Adresse"} valeur={state.adress} />
                        </View>
                        <View style={styles.prixChambreContainer}>
                            <PersoInput disabled={!isAdmin} name={"rentCost"} getText={(text)=>setState({...state, rentCost: text})} texto={"Prix"} valeur={state.rentCost.toString()} />
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <PersoInput disabled={!isAdmin} name={"totalArea"} getText={(text)=>setState({...state, totalArea: text})} texto={"Aire Totale"} valeur={state.totalArea.toString()} />
                            <PersoInput disabled={!isAdmin} name={"fixedChargesCost"} getText={(text)=>setState({...state, fixedChargesCost: text})} texto={"Charges fixes"} valeur={state.fixedChargesCost.toString()} />

                            <View style={styles.textCheck}>
                                <MyCheckBox disabled={!isAdmin} handleChange={handleChangeIsRented} valeur={state.isCurrentlyRented}/>
                                <Text style={{color:themeSelf.colors.textColor}}>Actuellement loué ?</Text>
                            </View>
                        </View>
                        <View style={styles.mapStyle}>
                            <Maps longitude={state.longitude} latitude={state.latitude}/>
                        </View>
                        {isAdmin ?
                            <View style={styles.ButtonStyle}>
                                <Button style={{marginBottom: 10}} mode="contained" color={themeSelf.colors.accent} onPress={updatePost}>Modifier</Button>
                                <Button style={{marginBottom: 10}} mode="contained" color={themeSelf.colors.accent} onPress={deletePost}>Supprimer</Button>
                            </View>
                            :
                            <View style={styles.ButtonStyle}>
                                <Button style={{flex:2}} mode="contained" color={!visible?themeSelf.colors.accent:"purple"} onPress={onToggleSnackBar}>Demander un devis</Button>
                            </View>
                        }
                        <View>
                            <Snackbar
                                visible={visible}
                                onDismiss={onDismissSnackBar}
                                action={{
                                    label: 'Ok',
                                    onPress: () => {
                                        props.navigation.goBack();
                                    },
                                }}
                            >
                                 Demande envoyée au Propriétaire
                            </Snackbar>
                        </View>
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
}
export const screenOptionHomeDetails=(props)=> {

        // const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
        const screenName=props.route.params?.name;
        return {headerTitle: () => <Text style={styles.texto}>{screenName}</Text>}

}




const styles = StyleSheet.create({
    mainContainer: {
        paddingTop:hp('2%'),
        paddingHorizontal:hp('2%'),
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
        marginBottom:hp('1%'),
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
        padding:hp('1%'),
        marginBottom:hp('1%'),
        elevation:5
    },
    imageStyle:{
        width: wp('100%'),
        height: undefined,
        aspectRatio: 1,
        borderRadius:hp('1%'),
    },
    ButtonStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    texto:{
        fontSize:19
    },
    mapStyle:{
        width:wp("100%"),
        height:hp("30%"),
        marginBottom:hp("1.5%"),
    }

});
