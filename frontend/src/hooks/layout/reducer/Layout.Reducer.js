import {LAYOUT_TYPES} from '../types/Layout.Types';
export function LayoutReducer (state, action) {
    const currentState = {...state};
    switch (action.type) {
        case LAYOUT_TYPES.SHOW_HIDE_LEFT_NAV:
            currentState.show = !currentState.show;
            return currentState;
        case LAYOUT_TYPES.MODE_NATIVE:
            currentState.modeNative = !currentState.modeNative;
            return currentState;
        default:
            return currentState;
    }
}