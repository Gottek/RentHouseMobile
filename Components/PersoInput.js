import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PersoInput = ({texto, getText, valeur, disabled, name}) => {
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
    const colors = (themeSelf.dark) ? {
        placeholder: 'white',
        text: 'white',
        primary: themeSelf.colors.textColor,
        underlineColor: 'transparent',
        background: themeSelf.colors.accent
    } : {};
    return (
        <TextInput
            name={name}
            disabled={disabled}
            mode='outlined'
            label={texto}
            value={valeur}
            theme={{colors}}
            style={{
                ...styles.inputStyle,
                padding: hp('1%'),
                color: themeSelf.colors.textColor
            }}
            onChangeText={getText}
        />
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1
    }
});

export default PersoInput;
