import '../ProjectPages.css';
import './GenshinBartenderAutoRecipes.css';

import headerImg from '../../../../../resource/projects/genshin-bartender-auto-recipes/genshin-bartender-auto-recipes.png';
import video from '../../../../../resource/projects/genshin-bartender-auto-recipes/GenshinBartenderAutoRecipes720.mp4'

function GenshinBartenderAutoRecipes(props) {
    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;The python programs for the action-RPG game Genshin Impact. Mainly intended to helping player by showing the recipe of a drink in 'Of Drink A-Dreaming' event
                </div>
                <hr/>
                <div>Video of usage</div>
                <video width="100%" controls src={video} />
                <hr/>
                <div>
                    Source Code : <a href='https://github.com/thitithorn-k/genshin-bartender-auto-recipes'>Github</a>
                </div>
                <div>
                    Download : <a href='https://github.com/thitithorn-k/genshin-bartender-auto-recipes/releases/tag/v1.1exe'>Windows executable file (EXE)</a>
                </div>
                <hr/>
                <div>more information, video, detail, etc. will update soon...</div>
            </div>
        </div>
    );
}

export default GenshinBartenderAutoRecipes;