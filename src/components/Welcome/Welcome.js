import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './Welcome.css';
import warningImg from '../../resource/warning-sign-svgrepo-com.svg';

function Welcome(props) {

    const welcomeDiv = useRef();
    const warningBoxDiv = useRef();
    const [ slideWelcome, setSlideWelcome ] = useState(false);
    const [ hideWelcome, setHideWelcome ] = useState(false);

    useLayoutEffect(() => {   
        gsap.fromTo(warningBoxDiv.current, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          stagger: 0.2
        });
    }, []);

    useEffect(() => {
        if(slideWelcome){
            gsap.to(welcomeDiv.current, { y: '100vh'});
            setTimeout(() => setHideWelcome(true), 1000);
        }
    }, [slideWelcome]);

    const handdleClick = () => {
        setSlideWelcome(true);
        props.setStartSite(true);
        props.setPlayMusic(true);
    }

    const handdleDeniedClick = () => {
        setSlideWelcome(true);
        props.setStartSite(true);
    }

    return(
            !hideWelcome &&
            <div className='welcome' ref={welcomeDiv} >
                <div className='warning-box' ref={warningBoxDiv}>
                    <img className='warning-img' src={warningImg} />
                    <div className='warning-text'>
                        {/* <div>This website contains element with <span className='green-text'>rapidly flashing colours</span>.</div>
                        <div>Please take caution if you are affected by epilepsy.</div> */}
                        <div>
                        This website contains a song that automatically plays. Change the volume of your device to the proper level.
                        </div>
                    </div>
                    <button className='confirm-btn' onClick={handdleClick}>Continue</button>
                    <button className='denied-btn' onClick={handdleDeniedClick}>Continue without sound</button>
                </div>
            </div>
    );
}

export default Welcome;