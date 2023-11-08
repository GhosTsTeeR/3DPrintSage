import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Login from './Login';
import SingUp from './SingUp';
import { HowToReg, LoginOutlined } from '@mui/icons-material';

export default function OptionLogin() {
  const [value, setValue] = useState(0);
  const [showList, setShowList] = useState(true); // Estado para mostrar/ocultar la lista

  const toggleList = (newValue) => {
    setShowList(newValue);
  };

  return (
    <Box sx={{ pb: 7}}>
      {showList ?(
        <Login/>
      ):(<SingUp/>)
      }
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 0) {
              toggleList(true);
            } else {
              toggleList(false); 
            }
          }}
        >
          <BottomNavigationAction label="Inciar sesion" icon={<LoginOutlined/>} />
          <BottomNavigationAction label="Resgistrarse" icon={<HowToReg />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}