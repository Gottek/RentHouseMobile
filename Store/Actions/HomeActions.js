import {deleteHome, updateHome, getAllProperties, handleOnSubmit} from "../../Api/api";

export const ADD_HOME='ADD_HOME';
export const GET_ALL_HOMES='GET_ALL_HOMES';
export const UPDATE_HOME_BY_ID='UPDATE_HOME_BY_ID';
export const DELETE_HOME_BY_ID='DELETE_HOME_BY_ID';
export const SELECT_OWN_HOMES='SELECT_OWN_HOMES';

export const addHome = home => {
    return async dispatch=>{
        //synchrone
        await handleOnSubmit(home).then();
        dispatch({type: ADD_HOME, newHome: home});
    }
}
export const getAllHomes = () => {
    return async dispatch=>{
        //synchrone
        const allHomes = await getAllProperties().then();
        dispatch({type: GET_ALL_HOMES, getAllHomesVar: allHomes});
    }
}

export const updateOneHome = updatedHome => {
    return async dispatch=>{
        //synchrone
        await updateHome(updatedHome).then();
        dispatch({type: UPDATE_HOME_BY_ID, updateHomeVar: updatedHome});
    }
}

export const deleteHomebyID = idHome => {
    return async dispatch=>{
        //synchrone
        await deleteHome(idHome).then();
        dispatch({type: DELETE_HOME_BY_ID , idHomeEjected : idHome });
    }
}

export const selectOwnHome = ownHomes => {
    return dispatch => dispatch({type: SELECT_OWN_HOMES , idOwnerHome : ownHomes });
}

