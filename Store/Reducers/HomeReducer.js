import {combineReducers} from "redux";
import {ADD_HOME} from "../Actions/HomeActions";
import Home from "../../Models/Home";

const initialState ={
    allHomes:[]
};


export const HomeReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_HOME:
            const id = action.newHome.id
            const name= action.newHome.name;
            const price= action.newHome.price
            const room= action.newHome.room
            const hammame= action.newHome.hammame
            const wifi= action.newHome.wifi
            const photoUri=action.newHome.photoUri
            const eauChaude= action.newHome.eauChaude
            const newHome = new Home(id,name,price,room,wifi,eauChaude,hammame,photoUri)
            const updateAllHome= [...state.allHomes,newHome];

            return {...state, allHomes:updateAllHome};
        default:
            return state
    }
};