import { AppBar, Badge, Box, IconButton, InputBase, TextField, Toolbar } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export default function Header() {
  return (
    <>
   
    <AppBar position='static'>
       <Toolbar>
        <Grid container>
          <Grid bgcolor="primary">
            <TextField></TextField>
          </Grid>
          <Grid ></Grid>
          <Grid> 
            <IconButton>
              <Badge badgeContent={4}>
              <NotificationsNoneIcon></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4}>
              <ChatBubbleOutlineIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4}>
              <PowerSettingsNewIcon/>
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
       </Toolbar>
     </AppBar>


     

     
 
    </>
  )
}
