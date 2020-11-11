import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MySwitch from "./Switch";
import {useSelector} from "react-redux";


export const SectionProfile = (props) => {
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    return (
        <View style={styles.MainContainer}>
            <View>
                <Text style={{...styles.contenuText, color: themeSelf.colors.textColor}}>
                    {props.text}
                </Text>
            </View>
            <View>
                <MySwitch onClick={props.onClick} default={props.default}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    contenuText: {
        fontSize: 20
    }
});

