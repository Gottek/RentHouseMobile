import {ADD_HOME, DELETE_HOME_BY_ID, GET_ALL_HOMES, SELECT_OWN_HOMES, UPDATE_HOME_BY_ID} from "../Actions/HomeActions";
import Home from "../../Models/Home";

const initialState ={
    allHomes : []
};

export const HomeReducer =(state=initialState, action)=>{

    switch (action.type) {
        case ADD_HOME:
            // const name= object.newHome.name;
            const homeAdd = action.newHome;

            const description= homeAdd.description;
            const rentCost= homeAdd.rentCost;
            const adress= homeAdd.adress;
            const type= homeAdd.type;
            const fixedChargesCost=homeAdd.fixedChargesCost;
            const totalArea= homeAdd.totalArea;
            const imageLink= homeAdd.imageLink;
            const idProprio= homeAdd.idProprio;
            const longitude= homeAdd.longitude;
            const latitude= homeAdd.latitude;

            let newHome = new Home(
                null,
                description,
                rentCost, 
                adress, 
                type, 
                fixedChargesCost, 
                totalArea, 
                imageLink,
                idProprio,
                longitude,
                latitude,
            );

            let updateAllHome= [...state.allHomes,newHome];
            return {...state, allHomes:updateAllHome};

        case GET_ALL_HOMES:

            const tableau = action.getAllHomesVar;
            let letAllHomes=tableau.map((object, index) => {
                return(newHome = new Home(
                    object.idProperty,
                    object.description,
                    object.rentCost,
                    object.adress,
                    object.type,
                    object.fixedChargesCost,
                    object.totalArea,
                    object.imageLink,
                    object.idProprio,
                    object.longitude,
                    object.latitude,
                ));
            });
            return {...state, allHomes: letAllHomes};
        case UPDATE_HOME_BY_ID:

            const homesIndex = state.allHomes.findIndex(
                home => home.idProperty === action.updateHomeVar.idProperty
            );
            console.log(homesIndex);
            const updatedHome =new Home(
                action.updateHomeVar.idProperty,
                action.updateHomeVar.description,
                action.updateHomeVar.rentCost,
                action.updateHomeVar.adress,
                action.updateHomeVar.type,
                action.updateHomeVar.fixedChargesCost,
                action.updateHomeVar.totalArea,
                action.updateHomeVar.imageLink,
                action.updateHomeVar.idProprio,
                action.updateHomeVar.longitude,
                action.updateHomeVar.latitude,
            );

            const updatedAllHomes = [...state.allHomes];
            updatedAllHomes[homesIndex] = updatedHome;

            return {...state, allHomes: updatedAllHomes};

        case DELETE_HOME_BY_ID:
            return {...state, allHomes : state.allHomes.filter(home => home.idProperty !== action.idHomeEjected)};

        case SELECT_OWN_HOMES:
            console.log("Sa marche")
            console.log(action.idOwnerHome)
            return {...state, allHomes : state.allHomes.filter(home => home.idProprio === action.idOwnerHome)};

        default:
            return state;
    }
};