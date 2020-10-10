import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import Colors from "../Constants/Colors";

const MyCheckBox = ({getChecked,valeur}) => {

    return (
        <Checkbox
            color={Colors.purpleStyle}
            status={valeur ? 'checked' : 'unchecked'}
            onPress={() => {getChecked(!valeur)}
            }
        />
    );
};

export default MyCheckBox;