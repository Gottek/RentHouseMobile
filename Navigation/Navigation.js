import * as React from 'react';
import Inscription from "../Pages/Inscription";
import Connexion from "../Pages/Connexion";
import Home from "../Pages/Home";
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Add} from "../Pages/Add";
import Profile from "../Pages/Profile";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../Constants/Colors";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {Maps, screenOptionMaps} from "../Pages/Maps";
import HomeDetails, {screenOptionHomeDetails} from "../Pages/HomeDetails";

const Stack = createStackNavigator();
export const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="Connexion" screenOptions={{ headerTitleAlign:"center" }}>
            <Stack.Screen name="Home" component={TabsNavigator}  options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
            })}/>
            <Stack.Screen name="Connexion" component={Connexion}/>
            <Stack.Screen name="Inscription" component={Inscription}/>
            <Stack.Screen name="Maps" component={Maps} options={screenOptionMaps}/>
            <Stack.Screen name="HomeDetails" component={HomeDetails} options={screenOptionHomeDetails}/>
        </Stack.Navigator>
    );
}
const Tab = createMaterialBottomTabNavigator();
export const TabsNavigator=()=>{
   return(
       <Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting="true" inactiveColor="black" barStyle={{ backgroundColor: Colors.purpleStyle}}>
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
