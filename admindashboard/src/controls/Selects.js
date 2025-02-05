import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function Selects(props) {
    const { name, label, value, onChange, options } = props
    return (
        <>
            <FormControl>
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
            </FormControl>
        </>
    )
}
