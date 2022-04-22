import '../ProjectPages.css';
import './Tapist.css';
import headerImg from '../../../../../resource/projects/tapist/tapist.png';

import ex from '../../../../../resource/projects/tapist/ex.gif';

function Tapist(props) {

    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;Tapist is the Windows rhythm game I created in 2018 using Unity. I have inspiration from Project Diva, the rhythm game from SONY. The game is still in development, doesn\'t have a beautiful interface, and missing many necessary interactive pages but the main core of the rhythm game is working as expected.
                </div>
                <hr/>
                <div className='tapist-gif'>
                    <img src={ex} />
                </div>
                <hr/>
                <div>
                    Source Code : <a href='https://github.com/thitithorn-k/tapist-rhythm-game' target='_blank'>Github</a>
                </div>
                <div>
                    Download : <a href='https://github.com/thitithorn-k/tapist-rhythm-game/releases/tag/20180909' target='_blank'>Windows executable file (EXE)</a>
                </div>
                <hr/>
                <div>
                    more information, video, detail, etc. will update soon...
                </div>
            </div>
        </div>
    );
}

export default Tapist;