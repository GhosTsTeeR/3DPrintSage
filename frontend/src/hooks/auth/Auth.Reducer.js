import { AUTH_TYPES } from "./Auth.Types";

export function AuthReducer (state, action) {
    const currentState = {...state};
    switch (action.type) {
        case AUTH_TYPES.LOGIN:
            currentState.login = !currentState.login;
            return currentState;
        default:
            return currentState;
    }
}