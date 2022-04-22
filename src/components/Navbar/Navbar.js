import './Navbar.css';
import logo from '../../resource/logo.png';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function Navbar(props) {

    const sections = ['Top', 'About me', 'Skills', 'Projects', 'Education', 'Contact me'];
    const sectionsId = ['hero', 'aboutme', 'skills', 'projects', 'education', 'contact']

    const navbarElement = useRef();
    useEffect(() => {
        if(props.currentSection === 0 || props.currentSection === 5){
            gsap.to(navbarElement.current, {
                backgroundColor: 'var(--grey-bright)',
            })
        } else {
            gsap.to(navbarElement.current, {
                backgroundColor: 'var(--grey)',
            })
        }
    }, [props.currentSection]);

    return(
        <div className="navbar noselect" ref={navbarElement}>
            <div className='navbar-logo' ><img src={logo}></img></div>
            <div className='navbar-menu'>
                <ul>
                    {
                        sections.map((section, index) => {
                            return <a key={index} href={'#'+sectionsId[index]}><li id={index===props.currentSection? 'navbar-menu-selected': ''}>{section}</li></a>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar;