import * as React from 'react';
import { Switch } from 'react-native-paper';
import Colors from "../Constants/Colors";

const MySwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch  color={Colors.purpleStyle} value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default MySwitch;