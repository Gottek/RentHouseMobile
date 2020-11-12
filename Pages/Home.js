import {StyleSheet, View} from "react-native";
import React from "react";
import {HomesList} from "../Components/HomesList";
import {useSelector} from "react-redux";

export default function Home({navigation}){
    // const dispatch = useDispatch();
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
    /*React.useEffect(()=>{
        const fetchHomes = async () =>{
            await dispatch( getAllHomes() ) ;
        }
        const fetchClients = async () =>{
            await dispatch( getAllMyClients() );
        }
        fetchHomes().then(console.log("Fetch homes OK"));
        fetchClients().then(console.log("Fetch clients OK"));
    },[])*/
    return(
        <View style={[styles.viewContainer,{backgroundColor:themeSelf.colors.background}]}>
            <HomesList navigation={navigation}/>
        </View>

    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex:1
    }
});