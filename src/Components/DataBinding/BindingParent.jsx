import React, { useState } from 'react';
import DataBindingComp from './DataBinding';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import StyleBindingComp from './StyleBinding';
import ClassBindingComp from './ClassBinding';
import EventBinding from './EventBinding';

const BindingParent = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <BrowserRouter>
                <AppBar style={{ 'margin-bottom': '180px' }}>
                    <Toolbar>
                        <Link to='/databinding' className='text-white text-decoration-none'>
                            DataBinding
                        </Link>

                        <Link to='stylebinding' className='text-white text-decoration-none mx-2'>StyleBinding</Link>
                        <Link to='clsbinding' className='text-white text-decoration-none mx-2'>ClassBinding</Link>
                        <Link to='eventbinding' className='text-white text-decoration-none mx-2'>EventBinding</Link>
                    </Toolbar>
                </AppBar>


                <Routes>
                    <Route path='databinding' element={<DataBindingComp />} />
                    <Route path='stylebinding' element={<StyleBindingComp />} />
                    <Route path='clsbinding' element={<ClassBindingComp />} />
                    {/* <Route path='eventbinding' element={<EventBinding />} /> */}
                    {flag ? <Route path='eventbinding' element={<EventBinding />} /> :
                        <Route path='eventbinding' element={<ClassBindingComp />} />}

                    <Route path='*' element={<h4 style={{ 'margin-top': '80px' }}>Oops!...Not found.</h4>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BindingParent