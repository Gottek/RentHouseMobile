import {getAllClient} from "../../Api/api";

export const ACTIVE_NOTIFICATIONS='ACTIVE_NOTIFICATIONS';
export const ACTIVE_DARK_THEME='ACTIVE_DARK_THEME';
export const CURRENT_USER_ID='CURRENT_USER_ID';
export const GET_ALL_CLIENTS='GET_ALL_CLIENTS';

export const activeNotif = isNotifsactive => {
    return dispatch => dispatch({type: ACTIVE_NOTIFICATIONS , NotifKey : isNotifsactive });
}

export const activeDarkTheme = isDarkThemeactive => {
    return dispatch => dispatch({type: ACTIVE_DARK_THEME , DarkTheme : isDarkThemeactive });
}

export const setCurrentUserID = userID => {
    return dispatch => dispatch({type: CURRENT_USER_ID , userIdKey : userID });
}

export const getAllMyClients = () => {
    return async dispatch => {
        const datas = await getAllClient().then();
        dispatch({type: GET_ALL_CLIENTS , allClientsKEY : datas });
    }
}

