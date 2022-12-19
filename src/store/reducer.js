import { POST_USERS, CHANGE_LANGUAGE } from './actions.js'

const initialState = {
    language: true,
    users: ["USERS GOLBAL STATE 1"],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case POST_USERS:
            return {
                ...state,
                users: action.payload,
            };

        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };

        default: {
            return state
        }
    }
};