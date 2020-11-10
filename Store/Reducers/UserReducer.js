import {CHANGE_STYLE} from "../Actions/UsersActions";

const initialState ={
    styleBack : {}
};

export const UserReducer =(state=initialState, action)=>{
    switch (action.type) {
        case CHANGE_STYLE:
            console.log(action.changeStyle + " je suis rentré");
            return (action.changeStyle === true) ? {...state, backgroundColor: "#34495e"} : {};
        default:
            console.log("loool")
            return state
    }
};