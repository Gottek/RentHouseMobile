import * as React from 'react';
import {Switch} from 'react-native-paper';
import Colors from "../Constants/Colors";
import {useSelector} from "react-redux";

const MySwitch = (props) => {
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
    const [isSwitchOn, setIsSwitchOn] = React.useState(props.default);

    const onToggleSwitch = () => {
        props.onClick(!isSwitchOn);
        setIsSwitchOn(!isSwitchOn);
    }

    return <Switch color={themeSelf.colors.accent} value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default MySwitch;
