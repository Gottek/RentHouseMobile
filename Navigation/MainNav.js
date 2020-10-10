import 'react-native-gesture-handler';
import React,{useState} from 'react';
import Navigation, {StackNavigator, TabsNavigator} from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";


const MainNav =props=>{
    return (
        <NavigationContainer >
            <StackNavigator/>
        </NavigationContainer>
    );
};
export default MainNav;
