import * as React from 'react';
import Connexion from "../Pages/Connexion";
import Home from "../Pages/Home";
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Add} from "../Pages/Add";
import Profile from "../Pages/Profile";
import {FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Maps, screenOptionMaps} from "../Pages/Maps";
import HomeDetails, {screenOptionHomeDetails} from "../Pages/HomeDetails";
import {useSelector} from "react-redux";

const Stack = createStackNavigator();
export const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign:"center" }}>
            <Stack.Screen name="Home" component={TabsNavigator}  options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
            })}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="Maps" component={Maps} options={screenOptionMaps}/>
            <Stack.Screen name="HomeDetails" component={HomeDetails} options={screenOptionHomeDetails}/>
        </Stack.Navigator>
    );
}
const Tab = createMaterialBottomTabNavigator();
export const TabsNavigator=()=>{
    const themeSelf = useSelector(state => state.reducerUserKey.themeSelf);
   return(
       <Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting="true" inactiveColor="black" barStyle={{ backgroundColor: themeSelf.colors.accent}}>
        <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon:(tabinfo)=> <FontAwesome name="user" size={24} color={tabinfo.color} />
                    }}
        />
        <Tab.Screen name="Home"
                    component={Home}
                    options={{
                        tabBarIcon:(tabinfo)=> <FontAwesome5 name="home" size={24} color={tabinfo.color} />
                    }}
        />
        <Tab.Screen name="Add" component={Add}
                    options={{
                        tabBarIcon:(tabinfo)=> <MaterialCommunityIcons name="image-plus" size={24} color={tabinfo.color} />
                    }}
        />
    </Tab.Navigator>
   );
}
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Add';

    switch (routeName) {
        case 'Add':
            return 'Add a place';
        case 'Profile':
            return 'My profile';
        case 'Home':
            return 'Home';
    }
}
