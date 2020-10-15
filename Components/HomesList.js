import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import {useSelector} from "react-redux";
import HomeCardView from "./HomeCardView";
import {getAllHomes} from "../Store/Actions/HomeActions";

export const HomesList=()=>{

    const homesArray=useSelector(state=>state.reducerHomeKey.allHomes);
    console.log(homesArray);
    const renderHome=Data=>{
        return(
            <HomeCardView
            userName={"Jean-Jacque"}
            userDescription={"1er du nom"}
            homeTitle={Data.item.description}
            homePrice={Data.item.rentCost}
            homeadress={Data.item.adress}

            homeRoom={Data.item.type}
            homeImage={Data.item.imageLink}
            totalArea = {Data.item.totalArea}
            fixedChargesCost = {Data.item.fixedChargesCost}
            />
        );
    }

    return(
            <FlatList
                data={homesArray}
                renderItem={renderHome}
                keyExtractor={(item, index) => index.toString()}
                style={styles.MainContainer}>
            </FlatList>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        padding:30,
    }
});