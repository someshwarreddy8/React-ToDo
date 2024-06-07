import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/NetFlixHeader';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EventHandling from './Components/Components/EventHandling';
import FormPreventDefault from './Components/Components/FormPreventDefault';
import Home from './Components/Components/Home';
import EventPropagation from './Components/Components/EventPropagation';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <header>
          <AppBar>
            <Toolbar>
              <div className='d-flex justify-content-between' style={{ width: '100%' }}>

                <div><Typography variant='h5'>React practice</Typography></div>

                <div>
                  <Link to='/home' className='text-white text-decoration-none'><span className='mx-2'>Home</span></Link>
                  <span className='mx-2'>Categories</span>
                  <span className='mx-2'>About</span>
                </div>

                <div>
                  <span className='mx-2 bi bi-cart'></span>
                  <span className='mx-2 bi bi-person'></span>
                </div>

              </div>
            </Toolbar>
          </AppBar>
        </header>

        <main className='' style={{ 'margin-top': '80px' }}>
          <div className='row' style={{ height: '400px' }}>
            <section className='col-3 border border-4'>
              <div className='mt-2'>
                <Link to='/eventHandling'>
                  <Button variant='contained' endIcon={<SendIcon />}>EventHandling</Button>
                </Link>

                <Link to='/formSubmit'>
                  <Button className='mt-3' variant='contained' endIcon={<SendIcon />}>FormSubmit</Button>
                </Link>

                <Link to='/eventpropagation'>
                  <Button className='mt-3' variant='contained' endIcon={<SendIcon />}>Event Propagation</Button>
                </Link>
              </div>

            </section>

            <section className='col-8 border border-4'>
              <Routes>
                <Route path='home' element={<Home />} />
                <Route path='eventHandling' element={<EventHandling />} />
                <Route path='formSubmit' element={<FormPreventDefault />} />
                <Route path='eventpropagation' element={<EventPropagation />} />
              </Routes>
            </section>
          </div>
        </main>

      </BrowserRouter>
    </div>

  );
}

export default App;
