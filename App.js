import 'react-native-gesture-handler';
import React,{useState} from 'react';
import MainNav from "./Navigation/MainNav";
import {createStore,combineReducers} from "redux";
import {userReducers} from "./Store/Reducers/Users"
import {Provider} from "react-redux";
import {HomeReducer} from "./Store/Reducers/HomeReducer";

export default function App(){

    const rootReducer = combineReducers({
        reducerUserKey:userReducers,
        reducerHomeKey:HomeReducer
    });
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <MainNav/>
        </Provider>
    );
}
