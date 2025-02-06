import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CheckBox(props) {
    const {name, label, value, onChange}=props
    const etarget=(name,value)=>({
        target:{
            name,value
        }
    })
  return (
    <>
       <FormControl sx={{marginTop:'10px'}}>
            <FormControlLabel
                control={<MuiCheckbox checked={value} name={name} onChange={e=>onChange(etarget(name, e.target.checked))}/>}
                label={label}
            />
            
        </FormControl>
    </>
  )
}

