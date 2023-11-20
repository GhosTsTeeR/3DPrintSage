import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {AccountCircle, Close} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import OptionLogin from '../auth/OptionLogin';
import { UserAuth } from '../../../hooks/auth/Auth.Provider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const { openModalAuth, setOpenModalAuth } = UserAuth();
  
  const mode =  "ModeLight"
  const handleOpen = () => setOpenModalAuth(true);
  const handleClose = () => setOpenModalAuth(false);

  return (
    <React.Fragment>
        <div onClick={handleOpen} className={"GM__"+mode+"__header-auth"}>
            <h6>Autenticate</h6>
            <AccountCircle/>
        </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalAuth}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalAuth}>
          <Box sx={style}>
            <OptionLogin/>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}