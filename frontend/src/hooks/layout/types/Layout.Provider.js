import React, { useReducer} from 'react'
import LayoutContext from '../types/Layout.Contex'
import { LayoutReducer } from '../reducer/Layout.Reducer'
import { LAYOUT_TYPES } from './Layout.Types';


const LayoutProvider = (props) => {
    const {children}= props;

    const onShowHideleftNav = () => {
        setState({type: LAYOUT_TYPES.SHOW_HIDE_LEFT_NAV});
    }
    const onModeNative = () => {
        setState({type: LAYOUT_TYPES.MODE_NATIVE});
    }
    const initialState = {
        show: false,
        modeNative: false,
        onShowHideleftNav,
        onModeNative,
    };
    const [state, setState] =useReducer(LayoutReducer, initialState);
    return(
        <LayoutContext.Provider value={state}>
            {children}
        </LayoutContext.Provider>
    )

}

export default LayoutProvider;