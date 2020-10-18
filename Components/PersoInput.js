import * as React from 'react';
import { TextInput } from 'react-native-paper';
import createCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/createCSSStyleSheet";
import {ScrollView, StyleSheet} from "react-native";

const PersoInput = ({texto,getText,valeur,disabled,name}) => {

    return (
        <TextInput
            name={name}
            disabled={disabled}
            mode='outlined'
            label={texto}
            value={valeur}
            style={styles.inputStyle}
            onChangeText={getText}
        />
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flex:1
    }
});

export default PersoInput;