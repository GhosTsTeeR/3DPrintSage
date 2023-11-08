import React, { useContext } from 'react'
import LayautContext from '../../hooks/layout/types/Layout.Contex';

export default function MainContainer({children}) {
  
  const layout$ = useContext(LayautContext);
  const { show } = layout$;
  const { modeNative } = layout$;
  let style = (show, modeNative) => {
    if (show === false && modeNative === false) {
      return "GM__ModeLight__container";
    }
    if (show === true && modeNative === false) {
      return "GM__ModeLight__container-full"
    }
    if (show ===true && modeNative === true) {
      return "GM__ModeNight__container-full"
    }

  }
  return (
    <section className={style(show, modeNative)}>{children}</section>
  )
}
