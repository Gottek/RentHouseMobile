import 'react-native-gesture-handler';
import React from 'react';
import MainNav from "./Router/MainNav";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducers} from "./Store/Reducers/UsersReducer"
import {Provider} from "react-redux";
import {HomeReducer} from "./Store/Reducers/HomeReducer";
import thunk from "redux-thunk";

export default function App(){


    const rootReducer = combineReducers({
        reducerUserKey:userReducers,
        reducerHomeKey:HomeReducer
    });
    const store = createStore(rootReducer,applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <MainNav/>
        </Provider>
    );
}
