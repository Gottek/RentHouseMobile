
import {FlatList, ScrollView, StyleSheet} from "react-native";
import React from "react";
import {View} from "react-native"
import {HomesList} from "../Components/HomesList";

export default function Home({route,navigation}){

    return(
        <View style={styles.viewContainer}>
            <HomesList navigation={navigation}/>
        </View>

    );
}
const styles = StyleSheet.create({
    viewContainer: {
        flex:1
    }
});