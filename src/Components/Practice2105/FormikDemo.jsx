import { useFormik } from 'formik'
import React from 'react'

const FormikDemo = () => {

    const handleValidation = (formData) => {
        let errors = { name: '', password: '' };

        if (formData.userName.length <= 3) {
            errors.name = 'Name must be > 3 letters';
        } else {
            if (formData.userName.length > 5) {
                errors.name = 'Name should not be >= 5';
            } else {
                errors.name = '';
            }
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validate: handleValidation,
        onSubmit: (data) => { console.log(data); }
    });

    return (
        <div className='container-fluid d-flex justify-content-center'>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name='userName' onChange={formik.handleChange} /></dd>
                    <span className='text-danger'>{formik.errors.name}</span>

                    <dt>Password</dt>
                    <dd><input type="text" name='password' onChange={formik.handleChange} /></dd>

                    <dd><button type='submit' className='submit btn btn-danger'>Submit</button></dd>
                </dl>
            </form>
        </div>
    )
}

export default FormikDemo