import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import Colors from "../Constants/Colors";

const MyCheckBox = ({getChecked,valeur,disabled}) => {

    return (
        <Checkbox
            disabled={disabled}
            color={Colors.purpleStyle}
            status={valeur ? 'checked' : 'unchecked'}
            onPress={() => {getChecked(!valeur)}
            }
        />
    );
};

export default MyCheckBox;