
import { Box, Grid2 } from '@mui/material';

import Useform, { Form } from '../../components/Useform';
import { Control } from '../../controls/control/Control';
import *as EmployeeServices from '../../service/EmployeeServices';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const genderItems = [
    {
        id: 'Male', title: 'Male'
    },
    {
        id: 'Female', title: 'Female'
    },
    {
        id: 'Other', title: 'Other'
    }

]

const initaialValue = {
    id: '',
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: "Male",
    department: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {
    const validate = (fildvalidate=values) => {
        
        let temp = {...errors}
        if('fullName' in fildvalidate)
        temp.fullName = fildvalidate.fullName ? "" : "This Fild is required"
        if('email' in fildvalidate)
        temp.email = (/$^|.+@.+..+/).test(fildvalidate.email) ? "" : "Email is not valid."
        if('mobile' in fildvalidate)
        temp.mobile = fildvalidate.mobile.length > 9 ? "" : "Minimum 11 numbers required."
        if('department' in fildvalidate)
        temp.department = fildvalidate.department ? "" : "This Fild is required"

        seterrors(
            { 
            ...temp 
            }
        )
        if(fildvalidate===values)
        return Object.values(temp).every(x=> x === "") 

    }

    const { values, handleInput, errors, seterrors, resetForm, } = Useform(initaialValue,true,validate)
    // const { values, handleInput } = Useform(initaialValue)-> Useform.js Theke রিটার্ন করার মাধ্যমে স্টেট শেয়ার করা হচ্ছে:
    

    const handleSubmit = e => {
        e.preventDefault()
        console.log(' :', validate());
        if(validate()){
            EmployeeServices.insertEmployee(values)
            resetForm()
        }
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Box sx={{ width: '100%' }}>
                    <Grid2 container rowSpacing={1} columnSpacing={3}>
                        <Grid2 size={{ xs: 12, md: 7 }}>
                            <Grid2 container rowSpacing={1} columnSpacing={3}>
                                <Grid2 size={{ xs: 12, md: 10 }}>

                                    <Control.Input
                                        name="fullName"
                                        label="FullName"
                                        value={values.fullName}
                                        onChange={handleInput}
                                        error={errors.fullName}
                                    />
                                </Grid2>

                                <Grid2 size={{ xs: 12, md: 10 }}>
                                    <Control.Input
                                        name="email"
                                        label="Email"
                                        value={values.email}
                                        onChange={handleInput}
                                        error={errors.email}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 10 }}>
                                    <Control.Input
                                        name="mobile"
                                        label="mobile"
                                        value={values.mobile}
                                        onChange={handleInput}
                                        error={errors.mobile}
                                    />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 10 }}>
                                    <Control.Input
                                        name="city"
                                        label="city"
                                        value={values.city}
                                        onChange={handleInput}
                                    />
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 5 }}>
                            <Control.RadioGroups
                                name="gender"
                                label="Gender"
                                value={values.gender}
                                onChange={handleInput}
                                items={genderItems}
                            />
                            <Control.Selects
                                name="department"
                                label="Department"
                                value={values.department}
                                onChange={handleInput}
                                options={EmployeeServices.getDepartments()}
                                error={errors.department}
                            />
                            <Control.CheckBox
                                name="isPermanent"
                                label="isPermanent"
                                value={values.isPermanent}
                                onChange={handleInput} />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                            <Box display={'flex'} gap={2} marginTop={2}>
                                <Control.Buttons
                                    text="Submit"
                                    type="submit"
                                />
                                <Control.Buttons
                                    text="Reset"
                                    onClick={resetForm}
                                />
                            </Box>

                        </Grid2>
                    </Grid2>
                </Box>
            </Form>
        </>
    )
}


