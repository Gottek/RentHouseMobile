import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import {useSelector} from "react-redux";
import HomeCardView from "./HomeCardView";

export const HomesList=()=>{

    const homesArray=useSelector(state=>state.reducerHomeKey.allHomes);

    const renderHome=Data=>{
        return(
            <HomeCardView
            userName={"Jean-Jacque"}
            userDescription={"1er du nom"}
            homeTitle={Data.item.name}
            homePrice={Data.item.price}
            homeRoom={Data.item.room}
            homeImage={Data.item.photoUri}
            homeWifi={Data.item.wifi}
            homeEauChaude={Data.item.eauChaude}
            homeHammame={Data.item.hammame}
            />
        );
    }

    return(
            <FlatList
                data={homesArray}
                renderItem={renderHome}
                keyExtractor={(item, index) => item.id}
                style={styles.MainContainer}>
            </FlatList>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        padding:30,
    }
});