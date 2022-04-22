import '../ProjectPages.css';
import './Tenrun.css';
import headerImg from '../../../../../resource/projects/tenrun/tenrun.png';

function Tenrun(props) {

    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;Tenrun, exercise activities recorder web app. It's my project created during <a href='https://thailand.generation.org/' target='_blank'>Generation Thailand - Junior Software Developer bootscamp</a> using MERN stack.
                    The frontend is deployed to Github page and the backend server is deployed to Vercel serverless.
                </div>
                <hr/>
                <div>
                    <a href='https://thitithorn-k.github.io/tenrun/' target='_blank'>DEMO - Tenrun</a>
                </div>
                <div>
                    Source Code : <a href='https://github.com/thitithorn-k/tenrun' target='_blank'>Frontend</a> <a href='https://github.com/thitithorn-k/tenrun-server' target='_blank'>Backend</a>
                </div>
                <hr/>
                <div>
                    more information, video, detail, etc. will update soon...
                </div>
            </div>
        </div>
    );
}

export default Tenrun;