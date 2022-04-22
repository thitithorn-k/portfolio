import './ProjectPage.css';
import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';
import closeButton from '../../../resource/close-svgrepo-com.svg';
import GenshinAutoInfo from './ProjectPages/GenshinAutoInfo/GenshinAutoInfo';

function ProjectPage(props) {
    const pageElement = useRef();
    const pageBorderElement = useRef();

    useLayoutEffect(() => {
        gsap.to(pageElement.current, {
            left: '-100vw',
        });
    }, [])

    useEffect(() => {
        if(props.openPage){
            gsap.to(pageElement.current, {
                left: 0,
                duration: 0.5,
                onComplete: () => {
                    gsap.to(pageElement.current, {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        duration: 0.5,
                    })
                }
            });
        } else {
            gsap.to(pageElement.current, {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                duration: 0.5,
            });
            gsap.to(pageBorderElement.current, {
                left: 'calc(-100vw - 32px)',
                duration: 0.5,
                onComplete: () => {
                    gsap.to(pageElement.current, {
                        left: 'calc(-100vw - 32px)',
                        duration: 0.3,
                        onComplete: () => {
                            gsap.to(pageBorderElement.current, {
                                left: 0,
                                duration: 0,
                            });
                        }
                    });
                    
                }
            });
        }
    }, [props.openPage])

    const handdleCloseClick = (e) => {
        if(e.target.className === 'project-page-close' || e.target.className === 'project-page'){
            props.setOpenPage(false);
        }
    }

    return (
        <div className='project-page' ref={pageElement} onClick={handdleCloseClick}>
            <div className='project-page-border' ref={pageBorderElement} >
                <div className='project-page-titlebar'>
                    {props.selectedProject.name}
                    <img src={closeButton} className='project-page-close' onClick={handdleCloseClick} />
                </div>
                {props.selectedProject.project_page}
            </div>
        </div>
    )
;}

export default ProjectPage;