import 'react-native-gesture-handler';
import React,{useState} from 'react';
import MainNav from "./Navigation/MainNav";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {userReducers} from "./Store/Reducers/UsersReducer"
import {Provider} from "react-redux";
import {HomeReducer} from "./Store/Reducers/HomeReducer";
import thunk from "redux-thunk";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    dark:true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        accent: '#f1c40f',
        background : '#aaa'
    },
};

export default function App(){

    const rootReducer = combineReducers({
        reducerUserKey:userReducers,
        reducerHomeKey:HomeReducer
    });
    const store = createStore(rootReducer,applyMiddleware(thunk));

    return (
        <PaperProvider theme={theme}>
            <Provider store={store}>
                <MainNav/>
            </Provider>
        </PaperProvider>
    );
}
