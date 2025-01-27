import { AppBar, Badge, Box, InputBase, Stack, Toolbar } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';


export default function Header() {
  return (
    <>

      <AppBar position='static'>

        <Toolbar>
          <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main', px: 2 }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <InputBase />
              </Box>
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>

                <Badge color="secondary">
                  <LogoutIcon />
                </Badge>

                <Badge color="secondary">
                  <FaceIcon />
                </Badge>
              </Box>

            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
