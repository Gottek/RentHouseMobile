import {ACTIVE_DARK_THEME, ACTIVE_NOTIFICATIONS, CURRENT_USER_ID} from "../Actions/UsersActions";

const initialState ={
    notif:true,
    themeDark:false,
    currentID:1,
};

export const userReducers =(state=initialState, action)=>{

    switch (action.type) {
        case ACTIVE_NOTIFICATIONS:
            const valNotif = action.NotifKey;
            return {...state, notif: valNotif };

        case ACTIVE_DARK_THEME:
            const valTheme = action.DarkTheme;
            return {...state, themeDark: valTheme };

        case CURRENT_USER_ID:
            const currentIDUser = action.userIdKey;
            return {...state, currentID: currentIDUser };

        default:
            return state;
    }
}

