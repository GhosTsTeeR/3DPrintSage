import React, { useContext } from 'react'
import {Cottage, Expand, Newspaper, SportsEsports, TextSnippet} from '@mui/icons-material';
import LayautContext from '../../../hooks/layout/types/Layout.Contex';
import { Link } from 'react-router-dom';

export default function LefNav() {
  const layout$ = useContext(LayautContext);
  const { onShowHideleftNav, show, modeNative } = layout$;
  function onClickAllRoutes() {
    onShowHideleftNav()
  };
  let allRoutes =  show? "-all": ""
  let mode = modeNative? "ModeNight": "ModeLight"
  return (
    <nav className={"GM__"+mode+"__leftnav"+allRoutes}>
      <ul>
      <li>
          <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route"}>
          <div onClick={onClickAllRoutes} className={"GM__"+mode+"__leftnav"+allRoutes+"-route-icon"}>
              <Expand/>
            </div>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-title"}>
              <h6>Espero y pases un rato agradable :3</h6>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">
          <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route"}>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-icon"}>
              <Cottage/>
            </div>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-title"}>
              <h6>Home</h6>
            </div>
          </div>
          </Link>
        </li>
        <li>
        <Link to="/guia-practica">
          <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route"}>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-icon"}>
              <SportsEsports/>
            </div>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-title"}>
              <h6>Guia y practica</h6>
            </div>
          </div>
          </Link>
        </li>
        <li>
          <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route"}>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-icon"}>
               <TextSnippet/>
            </div>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-title"}>
              <h6>Conceptos basicos</h6>
            </div>
          </div>
        </li>
        <li>
          <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route"}>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-icon"}>
              <Newspaper/>
            </div>
            <div className={"GM__"+mode+"__leftnav"+allRoutes+"-route-title"}>
              <h6>Articulos</h6>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
