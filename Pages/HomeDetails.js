import {Dimensions, KeyboardAvoidingView, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {HomesList} from "../Components/HomesList";
import {Image} from "react-native";
import {ScrollView} from "react-native";
import {Button, Card} from "react-native-paper";
import PersoInput from "../Components/PersoInput";
import MyCheckBox from "../Components/MyCheckBox";
import {useDispatch, useSelector} from "react-redux";
import {deleteHomebyID, updateOneHome} from "../Store/Actions/HomeActions";

export default function HomeDetails (props){

    const dispatch=useDispatch();
    const idHome=props.route.params?.idHome;
    //je parcours ma liste de maison à la rechercher de la maison qui porte le même id que la maison où j'ai cliqué
    const singleHome=useSelector(state=>state.reducerHomeKey.allHomes);
    const isAdmin=props.route.params?.autorisation; // les droits d'accès
    const { height } = Dimensions.get('window');

    const [state, setState] = React.useState({
        rentCost:1,
        fixedChargesCost:1,
        totalArea:1,
    });

    React.useEffect (() => {

        const onvaAttendre = async () => {
            const selectorHome = await singleHome.find(home=>home.idProperty===idHome);
            setState(selectorHome);
        }
        onvaAttendre().then(() => console.log("ok"));
    },[])

    //pas besoin de clean le state, il se fait détruire quand tu change de page
    async function updatePost(){
        //requete vers le store
        await dispatch( updateOneHome(state));
        props.navigation.goBack();
    }
     function deletePost(){
        //requete vers le store
         props.navigation.goBack();
         console.log("ok");
         dispatch( deleteHomebyID(state.idProperty));
    }

    /*const handleChange = (text,name) => {
        console.log(name+" -> "+text);
        setState({[name]: text});
    }*/

    const handleChangeIsRented = (e) => {
        setState(c => ({...c, isCurrentlyRented: !state.isCurrentlyRented}));
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
                                <MyCheckBox disabled={!isAdmin} name={"isCurrentlyRented"} handleChange={handleChangeIsRented} valeur={state.isCurrentlyRented}/>
                                <Text>Actuellement loué ?</Text>
                            </View>
                        </View>
                        {isAdmin && <View style={styles.ButtonStyle}>
                            <Button style={{marginBottom: 10}} mode="contained" color="#8e44ad" onPress={updatePost}>Modifier</Button>
                            <Button style={{marginBottom: 10}} mode="contained" color="#8e44ad" onPress={deletePost}>Supprimer</Button>
                        </View>}
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
}
export const screenOptionHomeDetails=(props)=> {
    {
        // console.log(props.route.params);
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