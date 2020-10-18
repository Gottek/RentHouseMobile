import {Dimensions, KeyboardAvoidingView, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {HomesList} from "../Components/HomesList";
import {Image} from "react-native";
import {ScrollView} from "react-native";
import {Button, Card} from "react-native-paper";
import PersoInput from "../Components/PersoInput";
import MyCheckBox from "../Components/MyCheckBox";
import {useDispatch, useSelector} from "react-redux";

export default function HomeDetails (props){

    const dispatch=useDispatch();
    const idHome=props.route.params?.idHome;
    //je parcours ma liste de maison à la rechercher de la maison qui porte le même id que la maison où j'ai cliqué
    const singleHome=useSelector(state=>state.reducerHomeKey.allHomes.find(home=>home.id===idHome))
    const isAdmin=props.route.params?.autorisation; // les droits d'accès

    const { height } = Dimensions.get('window');

    //pas besoin de clean le state, il se fait détruire quand tu change de page
    function updateImage(){
        //requete vers le store
        props.navigation.goBack();
    }
    function deleteImage(){
        //requete vers le store
        props.navigation.goBack();
    }


    return(
        <KeyboardAvoidingView  behavior={"Height"} style={styles.mainContainer}>
            <Card style={styles.cardContainer}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:height+height/3}}>
                    <View style={styles.mainViewContainer}>
                        <View>
                            <Image style={styles.imageStyle} source={{ uri: 'https://picsum.photos/700' }}/>
                        </View>
                        <View style={styles.homeName}>
                            <PersoInput disabled={!isAdmin} texto={"Description de la maison"} getText={"une description"} valeur={"une description"}/>
                        </View>
                        <View style={styles.homeName}>
                            <PersoInput disabled={!isAdmin} texto={"Adresse"} getText={"quelque chose"} valeur={"quelque chose"}/>
                        </View>
                        <View style={styles.prixChambreContainer}>
                            <PersoInput disabled={!isAdmin} texto={"Prix"} getText={"quelque chose"} valeur={"quelque chose"}/>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <PersoInput disabled={!isAdmin} texto={"Aire Totale"} getText={"quelque chose"} valeur={"quelque chose"}/>
                            <PersoInput disabled={!isAdmin} texto={"Charges fixes"} getText={"quelque chose"} valeur={"quelque chose"}/>

                            <View style={styles.textCheck}>
                                <MyCheckBox disabled={!isAdmin} getChecked={false} valeur={"quelque chose"}/>
                                <Text>Actuellement loué ?</Text>
                            </View>
                        </View>
                        {isAdmin && <View style={styles.ButtonStyle}>
                            <Button style={{marginBottom: 10}} mode="contained" color="#8e44ad" onPress={updateImage}>Modifier</Button>
                            <Button style={{marginBottom: 10}} mode="contained" color="#8e44ad" onPress={deleteImage}>Supprimer</Button>
                        </View>}
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
}
export const screenOptionHomeDetails=(props)=> {
    {
        console.log(props.route.params);
        const screenName=props.route.params?.name;
        return {headerTitle: () => <Text style={styles.texto}>{screenName}</Text>}
    }
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
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius:10,
    },
    ButtonStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    texto:{
        fontSize:19
    }
});