import {ACTIVE_DARK_THEME, ACTIVE_NOTIFICATIONS, CURRENT_USER_ID, GET_ALL_CLIENTS} from "../Actions/UsersActions";
import {themeDark, themeLight} from "../../Theme/Themes";

const initialState ={
    notif:true,
    themeSelf:themeDark,
    currentID:1, //par defaut
    allClients:[],
};

export const userReducers =(state=initialState, action)=>{

    switch (action.type) {
        case ACTIVE_NOTIFICATIONS:
            const valNotif = action.NotifKey;
            return {...state, notif: valNotif };

        case ACTIVE_DARK_THEME:
            const valTheme = action.DarkTheme?themeDark:themeLight;
            return {...state, themeSelf: valTheme };

        case CURRENT_USER_ID:
            const currentIDUser = action.userIdKey;
            return {...state, currentID: currentIDUser };

        case GET_ALL_CLIENTS:
            const allMyClients = action.allClientsKEY;
            return {...state, allClients: allMyClients };

        default:
            return state;
    }
}

