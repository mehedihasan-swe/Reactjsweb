import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function Selects(props) {
    const { name, label, value,error=null, onChange, options } = props
    return (
        <>
            <FormControl sx={{ marginTop: '10px' }} error={error}>
              
                <InputLabel>{label}</InputLabel>
                <Select
                    name={name}
                    label={label}
                    value={value}
                    onChange={onChange}
                >

                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        options.map((mitem) => (
                            <MenuItem key={mitem.id} value={mitem.id}>{mitem.title}</MenuItem>
                        ))
                    }
                    

                </Select>
                {(error && <FormHelperText>{error}</FormHelperText>)}
            </FormControl>
        </>
    )
}
