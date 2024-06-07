import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';

const FormikDemoComp = () => {

    var handleValidation = (formData) => {
        let errors = { userNameV: '', passwordV: '' };

        if (formData.userName.length < 3) {
            errors.userNameV = "name must be greter than 3 chars";
        } else if (formData.userName.charCodeAt(0) < 65 || formData.userName.charCodeAt(0) > 90) {
            errors.userNameV = 'First letter of the string must be capital letter';
        }

        if (formData.password.length < 3) {
            errors.passwordV = 'password must be greter than 3 letters';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        // validate: handleValidation,
        validationSchema: yup.object({
            userName: yup.string().required('Name is required').min('4', 'name should be atleast 4 letters'),
            password: yup.string().required('password is required').min('2', 'password should be atleast 2 chars').max(5, 'password should not be greter than 5 chars')
        }),
        onSubmit: (formData) => {
            console.log(formData);
        }
    });

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
                <Typography variant='h6' className='text-success'>
                    <span className='bi bi-person-fill'></span>
                    User Registration</Typography>
                <dl>
                    <dt>Username:</dt>
                    <dd><input onBlur={formik.handleChange} type="text" name="userName" id="" /></dd>
                    <small className='text-danger'>{formik.errors.userName}</small>

                    <dt>Password:</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="password" id="" /></dd>
                    <small className='text-danger'>{formik.errors.password}</small>
                    <dd><Button variant='contained' type='submit'>Submit</Button></dd>
                </dl>
            </form>
        </div>
    )
}

export default FormikDemoComp;