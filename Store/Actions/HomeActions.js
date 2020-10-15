
export const ADD_HOME='ADD_HOME';
export const GET_ALL_HOMES='GET_ALL_HOMES';

export const addHome = home => {
    return {type: ADD_HOME, newHome: home}
}
export const getAllHomes = allHomes => {
    return {type: GET_ALL_HOMES, getAllHomes: allHomes}
}
