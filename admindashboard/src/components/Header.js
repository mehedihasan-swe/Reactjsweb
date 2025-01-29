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
    marginBottom:'15px'
  },
  searchInput:{
    opacity:'0.6',
    padding:'0 8px',
    fontSize:'0.8rem',
    
    '&:hover':{
    backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
  
    },
  },

  btnroot:{
    backgroundColor:'#d3d3d3 !important'
  },

  btnlabel: {
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
      color: 'blue !important', // Set the desired color
      fontSize: '24px', // Optional: Adjust the size of the icon if needed
    },
  },
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
                <InputBase placeholder='Search holder' className={classes.searchInput} startAdornment={<SearchIcon fontSize='small'/>}/>
              </Box>
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <IconButton classes={{ root: classes.btnroot, label: classes.btnlabel }}>
                  <MailIcon />
                </IconButton>

                <IconButton color='primary'> 
                  <LogoutIcon />
                </IconButton>

                <IconButton className={classes.btnlabel}>
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
