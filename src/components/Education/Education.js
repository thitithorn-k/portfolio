import { useState, useEffect } from 'react';

import './Education.css';

function Education(props) {
    const [drawer1, setDrawer1] = useState(false);
    const [drawer2, setDrawer2] = useState(false);
    const [drawer3, setDrawer3] = useState(false);

    const handleDrawer = (e) => {
        const drawerId = e.target.id;
        if(drawerId === 'drawer1'){
            setDrawer1((prev) => !prev);
        } else if(drawerId === 'drawer2'){
            setDrawer2((prev) => !prev);
        } else if(drawerId === 'drawer3'){
            setDrawer3((prev) => !prev);
        }

    }

    return (
        <section id='education' className='educations-section'>
            <div className='education-border'>
                <div className='educations-header'>Education</div>
                <div className='education'>
                    <div className='education-header'>
                        <div className='education-place'><a href='https://thailand.generation.org/' target='_blank'>Generation Thailand</a></div>
                        <div className='education-year'>2022 - Present</div>
                    </div>
                    <div className='education-detail'>
                        <div className='education-detail-section'>Junior Software Developer</div>
                        <li>Learned Git, HTML, CSS, JavaScript, Node.js, React, Express, MongoDB, SQL</li>
                    </div>
                </div>
                <div className='education'>
                    <div className='education-header'>
                        <div className='education-place'><a href="https://tu.ac.th/" target='_blank'>Thammasat University</a></div>
                        <div className='education-year'>2017 - 2021</div>
                    </div>
                    <div className='education-detail'>
                        <div className='education-detail-section'>Faculty of Arts, Japanese section</div>
                        <li>Second-class honors</li>
                        
                        <li id='drawer1' onClick={handleDrawer} className='drawer-head'>
                            <span>
                                Attened in TU-FU Entrepreneurship 2019
                            </span>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" className={drawer1? 'dropdown-svg dropdown-svg-open':'dropdown-svg'}>
                                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/>
                            </svg>
                        </li>
                        <ul className={drawer1? 'drawer':'drawer drawer-hide'} style={{margin: 0}}>
                            <li>The activity that cooperated by University of Fukui and Thammasat University</li>
                            <li>Finding the possibility of running a new business in Thai and Japan</li>
                        </ul>

                        <li id='drawer2' onClick={handleDrawer} className='drawer-head'>
                            <span>
                                Enrolled in the Department of Computer Science classes
                            </span>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" className={drawer2? 'dropdown-svg dropdown-svg-open':'dropdown-svg'}>
                                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/>
                            </svg>
                        </li>
                        <ul className={drawer2? 'drawer':'drawer drawer-hide'} style={{margin: 0}}>
                            <li>CS103 INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING (A)</li>
                            <li>CS213 Data Structures (A)</li>
                            <li>CS233 Computer Organization and Architecture (A)</li>
                            <li>CS251 Database System 1 (A)</li>
                            <li>CS341 Operating System 1 (B+)</li>
                            <li>CS365 Basic Theory in Artificial Intelligence (B)</li>
                        </ul>

                        <li id='drawer3' onClick={handleDrawer} className='drawer-head'>
                            <span>
                                Enrolled in the Department of Computer Engineering classes
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" className={drawer3? 'dropdown-svg dropdown-svg-open':'dropdown-svg'}>
                                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/>
                            </svg>
                        </li>
                        <ul className={drawer3? 'drawer':'drawer drawer-hide'} style={{margin: 0}}>
                            <li>CS103 INTRODUCTION TO OBJECT-ORIENTED PROGRAMMING (A)</li>
                            <li>CS213 Data Structures (A)</li>
                            <li>CS233 Computer Organization and Architecture (A)</li>
                            <li>CS251 Database System 1 (A)</li>
                            <li>CS341 Operating System 1 (B+)</li>
                            <li>CS365 Basic Theory in Artificial Intelligence (B)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;