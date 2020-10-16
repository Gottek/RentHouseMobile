import {combineReducers} from "redux";
import {ADD_HOME, GET_ALL_HOMES} from "../Actions/HomeActions";
import Home from "../../Models/Home";
import {handleOnSubmit} from "../../Api/api";

const initialState ={
    allHomes : []
};

export const HomeReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_HOME:

            // const name= object.newHome.name;
            const homeAdd = action.newHome.state;

            const description= homeAdd.description;
            const rentCost= homeAdd.rentCost;
            const adress= homeAdd.adress;
            const type= homeAdd.type;
            const fixedChargesCost=homeAdd.fixedChargesCost;
            const totalArea= homeAdd.totalArea;
            const imageLink= homeAdd.imageLink;

            let newHome = new Home(
                description,
                rentCost, 
                adress, 
                type, 
                fixedChargesCost, 
                totalArea, 
                imageLink
            );

            const onSubmit = async () =>{
                const submit = await handleOnSubmit (newHome);
                submit();
                console.log("Maison insérée dans la BDD");
            }

            onSubmit();
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