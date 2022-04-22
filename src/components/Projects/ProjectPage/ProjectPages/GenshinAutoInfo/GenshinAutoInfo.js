import '../ProjectPages.css';
import './GenshinAutoInfo.css';
import headerImg from '../../../../../resource/projects/genshin-auto-info/genshin-auto-info.png';

function GenshinAutoInfo(props) {

    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;Genshin Auto Info is the python program for the action-RPG game Genshin Impact.
                    It is mainly intended to help players calculate in-game character attack damage using open-cv to locate artifact stats from the game window without touching the game file.
                </div>
                <hr/>
                <div>
                    Source Code : <a href='https://github.com/thitithorn-k/GenshinAutoInfo' target='_blank'>Github</a>
                </div>
                <div>
                    more information, video, detail, etc. will update soon...
                </div>
            </div>
        </div>
    );
}

export default GenshinAutoInfo;