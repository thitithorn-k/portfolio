import './Skill.css';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function Skill(props) {
    const levelElement = useRef();
    useEffect(() => {
        if(props.currentSection === 2){
            gsap.fromTo(
                levelElement.current,
                {
                    width: 0
                },
                {
                    width: props.skill.level+'%',
                    duration: 1
                },
            )
        }
    }, [props.currentSection])

    return (
        <div className='skill'>
            <div className='skill-logo'>
                {props.skill.logo}
            </div>
            <div className='skill-name'>
                {props.skill.name}
            </div>
            <div className='skill-level' ref={levelElement} />
        </div>
        
    );
}

export default Skill;