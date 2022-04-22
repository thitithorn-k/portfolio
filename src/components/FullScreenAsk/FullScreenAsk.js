import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import './FullScreenAsk.css';
import closeButton from '../../resource/close-svgrepo-com.svg';

function FullScreenAsk(props) {

    const fullscreenDiv = useRef();
    const [ closeFullscreenDiv, setCloseFullscreenDiv ] = useState(false);

    const elem = document.documentElement;
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    const closeDiv = () => {
        gsap.to(fullscreenDiv.current, {x: -350, onComplete: () => {setCloseFullscreenDiv(true)}});
    }

    const handdleFullScreenClick = () => {
        openFullscreen();
        closeDiv();
    }

    useLayoutEffect(() => {
        gsap.fromTo(fullscreenDiv.current, 
            {x: -350},
            {x: 0},
            1
        );
    }, []);

    useEffect(() => {
        if(props.startSite) closeDiv();
    }, [props.startSite]);

    return(
        !closeFullscreenDiv &&
        <div className="fullscreenask" ref={fullscreenDiv}>
            <img src={closeButton} className='fullscreen-close' onClick={closeDiv}/>
            <div className='fullscreen-text'>Open the site in Full Screen for the best experience!!</div>
            <button className='fullscreen-btn' onClick={handdleFullScreenClick}>Full screen</button>
        </div>
    );
}

export default FullScreenAsk;