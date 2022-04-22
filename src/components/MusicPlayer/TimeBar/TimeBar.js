import { useEffect } from 'react';
import './TimeBar.css';

function TimeBar(props) {

    const handdleClick = (e) => {
        props.setPlayerTime(Math.floor(props.duration*e.pageX/e.target.offsetWidth));
    }

    return (
        <div className='time-bar-background' onClick={handdleClick} >
            <div className='time-bar' style={{width: props.timming + '%'}}></div>
        </div>
    );
}

export default TimeBar;