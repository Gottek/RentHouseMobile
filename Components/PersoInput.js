import * as React from 'react';
import { TextInput } from 'react-native-paper';
import createCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/createCSSStyleSheet";
import {StyleSheet} from "react-native";

const PersoInput = ({texto,getText,valeur}) => {

    return (
        <TextInput
            mode='outlined'
            label={texto}
            value={valeur}
            style={styles.inputStyle}
            onChangeText={text => {getText(text)}}
        />
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flex:1
    }
});

export default PersoInput;