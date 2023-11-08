import React, { useContext, useState } from 'react'
import { CancelOutlined, SendOutlined} from '@mui/icons-material';
import { Divider, InputAdornment, TextField } from '@mui/material';
import Login from '../modal/LoginModal';
import { UserAuth } from '../../../hooks/auth/Auth.Provider';
import AccountMenu from './componets/AccountMenu';


export default function Header() {
  const [inputValue, setInputValue] = useState('');

  const { user } = UserAuth();
  const mode =  "ModeLight"
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <header className={"GM__"+mode+"__header"}>
      <ul>
        <li>
          <div className={"GM__"+mode+"__header-logo"}>
            LOGO
          </div>
        </li>
        <li>
          <div className={"GM__"+mode+"__header-search"}>
            <TextField
            placeholder='Buscar...'
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position='end'>
                    {inputValue && (
                      <CancelOutlined
                        onClick={() => setInputValue('')} // Limpiar el valor al hacer clic en el icono de cancelar
                        style={{ cursor: 'pointer' }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              value={inputValue}
              onChange={handleChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SendOutlined/>
          </div>
        </li>
        <li>
          {
            user?<AccountMenu/>
            :<Login/>
          }
          
        </li>
      </ul>
    </header>
  )
}
