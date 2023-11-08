import { Send } from '@mui/icons-material';
import { Button, ClickAwayListener, Tooltip } from '@mui/material'
import React from 'react'
import { UserAuth } from '../hooks/auth/Auth.Provider';
import { Link } from 'react-router-dom';


function getDisplayName(user, dataUser) {
    if (user) {
      if (dataUser) {
        const { userName, name, apellido } = dataUser;
  
        if (userName) {
          return userName;
        } else if (name && apellido) {
          return name + apellido;
        }
        else if (name || apellido) {
          return name || apellido;
        }
      }
  
      return user.email;
    }
  
    return "Usuario Anónimo";
  }

export default function ProfileAdmin() {
    const { user, dataUser } = UserAuth();
    const displayName = getDisplayName(user, dataUser);
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    const mode = "ModeLight"
    return (
        <div className={"GM__"+mode+"__main-profile"}>
        <div className={"GM__"+mode+"__main-profile-panelU"}>
            <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="" />
            <div className={"GM__"+mode+"__main-profile-panelU-data"}>
            <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" alt="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" />
            <h1>{displayName}</h1>
            <span>{dataUser ? dataUser.position || "Usuario" : "Usuario"}</span>
            </div>
            <div className={"GM__"+mode+"__main-profile-panelU-setting"}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                <Tooltip
                    PopperProps={{
                    disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Estamos trabajando en ello :)"
                    placement="top-end"
                >
                    <Button onClick={handleTooltipOpen}>Ajustes</Button>
                </Tooltip>
                </div>
            </ClickAwayListener>
            </div>
        </div>
        <div className={"GM__"+mode+"__main-profile-panelH"}>
            <div className={"GM__"+mode+"__main-profile-panelH-curses"}>
            <h1>Crear, administra e interacciona con los cursos</h1>
            <ul>
            <li>
                <Send/> <span>Mi primer Curso</span>
            </li>
            <Link to="/crear-curso">
            <li >
                <Send/> <span>crear un curso</span>
            </li>
            </Link>
            </ul>
            </div>
            <div className={"GM__"+mode+"__main-profile-panelH-settings"}>
            <h1>Detalles de la cuenta</h1>
            <div className={"GM__"+mode+"__main-profile-panelH-settings-data"}>
                <label htmlFor="Nombre">Nombre</label>
                <input id="Nombre" type="text" value={dataUser ? dataUser.name : ''} disabled />
                <label htmlFor="Apellido">Apellido</label>
                <input id="Apellido" type="text" value={dataUser ? dataUser.lastName : ''} disabled />
                <label htmlFor="Document">numero de documento</label>
                <input id="Document" type="number" value={dataUser ? dataUser.document : ''} disabled />
                <label htmlFor="Celular">Numero celular</label>
                <input id="Celular" type="number" value={dataUser ? dataUser.cellPhone : ''} disabled />
                <label htmlFor="Correo">Correo</label>
                <input id="Correo" type="email" value={dataUser ? dataUser.email : ''} disabled />
            </div>
            <div className={"GM__"+mode+"__main-profile-panelH-option"}>
                <button>Modificar</button> <button>¿porque veo estos datos?</button>
            </div>
            </div>
        </div>
        </div>
    )
}
