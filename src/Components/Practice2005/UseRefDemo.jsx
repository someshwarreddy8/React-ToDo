import React, { useEffect, useRef, useState } from 'react';

const UseRefDemo = () => {
    const data = useRef(null);
    const [userName, setUserName] = useState('');
    const [secondName, setSecondName] = useState('');

    var handleOnchange = (e) => {

    }

    var handleSecondOnChange = (e) => {
        // setSecondName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data.current.value)
    }

    useEffect(() => {
        console.log("rendered");
        data.current.focus(); //auto focus on a field.
    }, []);

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <section>
                <form>
                    <input ref={data} type="text" onChange={handleSecondOnChange} name='secondName' />
                    <input onChange={handleOnchange} autoComplete='off' type="text" name='userName' />
                    <button onClick={onSubmit} type='submit' className='mx-2'>Submit</button>
                </form>
            </section>

            <section>
                {userName}
            </section>
        </div>
    )
}

export default UseRefDemo