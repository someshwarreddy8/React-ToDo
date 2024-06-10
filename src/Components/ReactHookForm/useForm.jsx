import React from 'react'
import { useForm } from 'react-hook-form'

const UseFormDemo = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className='ms-2 my-2'>

                <input className='my-2' defaultValue='userName' type="text" {...register("example", { required: true, minLength: 3, maxLength: 6 })} /> <br />

                {errors?.example?.minLength && (
                    <span className='text-danger'>MinLength of the field is 3</span>
                )}
                {errors?.example?.maxLength && (
                    <span className='text-danger'>Max length of the field should be 6</span>
                )}

                <input type="text" {...register("exampleRequired", { required: true })} /> <br />

                {errors.exampleRequired && (<span className='text-danger'>This field is required!!!</span>)}

                <button className='my-2 btn btn-primary' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default UseFormDemo

fkjdnfkjnd