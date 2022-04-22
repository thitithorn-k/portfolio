import './Project.css';
import templateImg from '../../../resource/template_img.png';

function Project(props) {

    const handdleClick = () => {
        props.setSelectedProject(props.project);
        props.setOpenPage(true);
    }

    return (
        <div className='project' onClick={handdleClick} >
            <div className='project-header'>
                <img className='project-img' src={window.location.origin + props.project.image} />
                <div className='project-name'><div>{props.project.name}</div></div>
            </div>
            <div className='project-detail'>
                {props.project.short}
            </div>
            <div className='project-tags'>
                {
                    props.project.tags.map((tag, index) => {
                        return <div key={index} className='project-tag'>{tag}</div>
                    })
                }
            </div>
        </div>
    );
}

export default Project;