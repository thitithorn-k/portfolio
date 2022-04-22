import './Hero.css';
import { useState, useEffect } from 'react';
import RandomText from '../../functions/RandomText';

function Hero(props) {

    const myName = 'Non Thitithorn';
    const [ currentName, setCurrentName ] = useState('');

    const [ cursor, setCursor ] = useState(false);

    useEffect(() => {
        if(props.startSite && props.currentSection===0){
            setTimeout(() => {RandomText(myName, setCurrentName)}, 100);
        } else {
            setCurrentName('')
        }
    }, [props.startSite, props.currentSection]);

    useEffect(() => {
        const blink = setInterval(() => {
            setCursor(!cursor);
        }, 500);
        return( () => clearInterval(blink));
    });

    return (
        <section id='hero' className='hero-section'>
            <div className='hero-border'>
                <div className='hero'>
                    <div className='hero-row1'>Hi, I'm</div>
                    <div className='hero-row2'>{currentName}<span className={cursor? 'hide': ''}>_</span></div>
                    <div className='hero-row3'>Junior Software Developer</div>
                    <div className='hero-row4'>
                        I enjoy learning and creating new things and making it best as I can.
                        I'm interested in image processing.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;