/* import axios from 'axios' */  
export const POST_USERS = "POST_USERS"
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export const postUsers = () => {
    return {
        type: 'POST_USERS',
        payload: ["CAMBIÓ EL ESTADO DE USUARIOS 2"]
    }
};

export const changeLanguage = () => {
    return {
        type: CHANGE_LANGUAGE,
        payload: false
    }
};

