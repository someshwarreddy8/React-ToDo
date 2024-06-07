import React, { useRef, useState } from 'react'

const ImgLoadEx = () => {

    const [progressBarVisibility, setProgressBarVisibility] = useState('d-none');
    const [imgVisibility, setImgVisibility] = useState('d-none');
    const [btnVisibility, setBtnVisibility] = useState('d-block btn btn-warning');

    const [progressBarVal, setProgressBarVal] = useState(1);

    var count = useRef(null);
    var stateOfprogressVal = useRef(null);

    var handleProgressVisibility = () => {
        count.current = count.current + 1;
        setProgressBarVal(count.current);

        if (count.current === 100) {
            setProgressBarVisibility('d-none');
            setImgVisibility('d-block');
        }
    }

    var loadClick = () => {
        setBtnVisibility('d-none');
        setProgressBarVisibility('d-block');
    }

    var handlePlay = () => {
        stateOfprogressVal.current = setInterval(handleProgressVisibility, 100);
    }

    var handlePause = () => {
        clearInterval(stateOfprogressVal.current);
    }

    var handleSubmit = () => {
        loadClick();
        stateOfprogressVal.current = setInterval(handleProgressVisibility, 100);
    }



    return (
        <div className='container-fluid mt-5'>
            <section>
                <button className={btnVisibility} onClick={handleSubmit}>Submit</button>
            </section>

            <section>
                <progress min='1' max='100' value={progressBarVal} className={progressBarVisibility} />
                <p className={progressBarVisibility} >{progressBarVal}% completed</p>

                <section className={progressBarVisibility}>
                    <button onClick={handlePlay} className='bi bi-play bg bg-success p-2 me-2 my-2'></button>
                    <button onClick={handlePause} className='bi bi-pause bg bg-warning p-2 my-2'></button>
                </section>

            </section>

            <section>
                <img className={imgVisibility} src="images/naruto.webp" alt="" style={{ height: '150px', width: '150px' }} />
            </section>
        </div>
    )
}

export default ImgLoadEx