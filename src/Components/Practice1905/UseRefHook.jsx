import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';

const UseRefHook = () => {
    const intervalStatus = useRef(null);
    const count = useRef(1);
    
    const [progressValue, setProgressValue] = useState(1);

    const [progressBarVisibility, setProgressBar] = useState('d-none');
    const [btnVisibility, setBtnVisibility] = useState('d-block col-12');
    const [imgVisibility, setImgVisibility] = useState('d-none col-12');
    const [message, setMessage] = useState('');

    let thread = useRef(null);

    var loadImage = () => {
        setBtnVisibility('d-none');
        setProgressBar('d-block');
    }

    var handleProgressValue = () => {
        count.current = count.current + 1;
        setProgressValue(count.current);
        if (count.current === 100) {
            setImgVisibility('d-block col-12');
            setProgressBar('d-none col-12');
        }
    }

    var handleClick = () => {
        loadImage();
        intervalStatus.current = setInterval(handleProgressValue, 100);
    }

    var handlePause = () => {
        clearInterval(intervalStatus.current);
        setMessage('Paused')
    }

    var handlePlay = () => {
        intervalStatus.current = setInterval(handleProgressValue, 100);
        setMessage('');
    }
    return (
        <div className='container-fluid d-flex  justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='row'>
                <Button className={btnVisibility} variant='contained' onClick={handleClick}>Click</Button> <br />
                <progress className={progressBarVisibility} min='1' max='100' value={progressValue} width='200px' height='30px'></progress>
                <p className={progressBarVisibility}>{progressValue}</p>

                <div className={progressBarVisibility}>
                    <button onClick={handlePause} className="bi bi-pause my-2 me-2 btn btn-warning"></button>
                    <button onClick={handlePlay} className="bi bi-play my-2 btn btn-success"></button>
                    <p>{message}</p>
                </div>
            </div>



            <div style={{ height: '200px', width: '200px' }}>
                <img src="images/naruto.webp" className={imgVisibility} alt="" />
            </div>
        </div>
    )
}

export default UseRefHook