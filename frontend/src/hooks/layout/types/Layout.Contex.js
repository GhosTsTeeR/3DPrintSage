import React from 'react'

const LayautContext = React.createContext({
    show: false,
    modeNative: false,
    onShowHideleftNav: () =>{},
    onModeNative: () =>{},
});

export default LayautContext;