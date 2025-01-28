import { AppBar, Box, InputBase, Stack, Toolbar } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
  root:{
    backgroundColor: '#ffffff !important',
  }
})


export default function Header() {
    
const classes=useStyles();

  return (
    <>
      <AppBar className={classes.root}  position='static'>

        <Toolbar>
          <Box sx={{ flexGrow: 1, px: 2 }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <InputBase
                placeholder='Search holder'
                startAdornment={<SearchIcon fontSize='small'/>}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <IconButton>
                  <MailIcon />
                </IconButton>

                <IconButton>
                  <LogoutIcon />
                </IconButton>

                <IconButton>
                  <FaceIcon />
                </IconButton>
              </Box>

            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
