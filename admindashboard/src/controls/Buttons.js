import { Button as Muibutton } from '@mui/material'
import React from 'react'

export default function Buttons(props) {
    const {text,size,color,variant,onClick, ...other}=props
  return (
    <>
    <Muibutton
    variant={variant || "contained"}
    size={size || "large"}
    color={color || "primary"}
    onClick={onClick}
    {...other}
    >
      {text}
    </Muibutton>
    </>
  )
}
