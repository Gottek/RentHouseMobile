import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import {useSelector} from "react-redux";
import HomeCardView from "./HomeCardView";
import {getAllHomes} from "../Store/Actions/HomeActions";

export const HomesList=({navigation})=>{

    const homesArray=useSelector(state=>state.reducerHomeKey.allHomes);
    // console.log(homesArray);
    const renderHome = Data => {
        // console.log(Data.item.idProperty)
        return (
            <HomeCardView
                idHome={Data.item.idProperty}
                userName={"Jean-Jacque"}
                userDescription={"1er du nom"}
                homeTitle={Data.item.description}
                homePrice={Data.item.rentCost}
                homeadress={Data.item.adress}
                homeRoom={Data.item.type}
                homeImage={Data.item.imageLink}
                totalArea = {Data.item.totalArea}
                fixedChargesCost = {Data.item.fixedChargesCost}
                navigation={navigation}
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