import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";
import {useSelector} from "react-redux";


const MainNav =props=>{

    const themeSelf = useSelector(state => state.reducerUserKey.themeDark);

    return (
        <NavigationContainer theme={themeSelf}>
            <StackNavigator/>
        </NavigationContainer>
    );
};
export default MainNav;
