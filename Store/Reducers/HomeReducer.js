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

            let newHome = new Home(
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
            
            let updateAllHome= [...state.allHomes,newHome];
            return {...state, allHomes:updateAllHome};

        case GET_ALL_HOMES:

            const tableau=action.getAllHomesVar;
            // console.log(tableau);

           const letAllHomes=tableau.map( (object, index) => {

                // console.log(" OBJECT OK ")
                // console.log(object),
                return(newHome = new Home(
                    object.id,
                    object.name,
                    object.description,
                    object.rentCost,
                    object.adress,
                    object.type,
                    object.fixedChargesCost,
                    object.totalArea,
                    object.imageLink
                ))

                //letAllHomes = [...letAllHomes,newHome]

            })

            // console.log("letAllHomes : ");
            // console.log(letAllHomes);
            return {...state, allHomes:letAllHomes};

        default:
            return state
    }
};