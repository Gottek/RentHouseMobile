import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import {useSelector} from "react-redux";

const MyCheckBox = ({valeur,disabled,handleChange,name}) => {
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);

    return (
        <Checkbox
            name={name}
            disabled={disabled}
            color={themeSelf.colors.accent}
            status={valeur ? 'checked' : 'unchecked'}
            onPress={handleChange}
        />
    );
};

export default MyCheckBox;