import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import Colors from "../Constants/Colors";

const MyCheckBox = ({valeur,disabled,handleChange,name}) => {

    return (
        <Checkbox
            name={name}
            disabled={disabled}
            color={Colors.purpleStyle}
            status={valeur ? 'checked' : 'unchecked'}
            onPress={handleChange}
        />
    );
};

export default MyCheckBox;