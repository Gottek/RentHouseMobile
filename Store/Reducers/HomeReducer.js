import {combineReducers} from "redux";
import {ADD_HOME, GET_ALL_HOMES} from "../Actions/HomeActions";
import Home from "../../Models/Home";

const initialState ={
    allHomes : []
};

export const HomeReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_HOME:
            const id = object.newHome.id
            const name= object.newHome.name;

            const description= object.newHome.description;
            const rentCost= object.newHome.rentCost;
            const adress= object.newHome.adress;
            const type= object.newHome.type;
            const fixedChargesCost=object.newHome.fixedChargesCost;
            const totalArea= object.newHome.totalArea;
            const imageLink= object.newHome.imageLink;

            const newHome = new Home( 
                id, 
                name, 
                description, 
                rentCost, 
                adress, 
                type, 
                fixedChargesCost, 
                totalArea, 
                imageLink
            );
            
            const updateAllHome= [...state.allHomes,newHome];
            return {...state, allHomes:updateAllHome};

        case GET_ALL_HOMES:
            
            console.log("action : ");
            console.log(action);
            let letAllHomes = []; 
            
            /*action.getAllHomes.map((object, index) => (
                
                console.log("object : "),
                console.log(object), 

                newHome = new Home( 
                    id = object.id, 
                    name = object.name, 
                    description = object.description, 
                    rentCost = object.rentCost, 
                    adress = object.adress, 
                    type = object.type, 
                    fixedChargesCost = object.fixedChargesCost, 
                    totalArea = object.totalArea, 
                    imageLink=object.imageLink
                ),

                letAllHomes = [...state.allHomes,newHome]

            ));
            */
            console.log("state : ");
            console.log(state.allHomes);
            /* const updateAllHome= [...state.allHomes,letAllHomes];
            return {...state, allHomes:updateAllHome}; */

        default:
            return state
    }
};