import * as React from 'react';
import {Switch} from 'react-native-paper';
import Colors from "../Constants/Colors";

const MySwitch = (props) => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(props.default);

    const onToggleSwitch = () => {
        props.onClick(!isSwitchOn);
        setIsSwitchOn(!isSwitchOn);
    }

    return <Switch color={Colors.purpleStyle} value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default MySwitch;