import {getAllProperties, handleOnSubmit} from "../../Api/api";

export const ADD_HOME='ADD_HOME';
export const GET_ALL_HOMES='GET_ALL_HOMES';

export const addHome = home => {
    return async dispatch=>{
        //synchrone
        await handleOnSubmit(home).then(() => console.log("Maison insérée dans la BDD"));
        dispatch({type: ADD_HOME, newHome: home});
    }
}
export const getAllHomes = allHomes => {
    return async dispatch=>{
        //synchrone
        await getAllProperties().then(() => console.log("Fetch Data Ok"));
        dispatch({type: GET_ALL_HOMES, getAllHomesVar: allHomes});
    }
}
