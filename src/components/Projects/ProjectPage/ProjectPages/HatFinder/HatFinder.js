import '../ProjectPages.css';
import './HatFinder.css';
import headerImg from '../../../../../resource/projects/hat-finder/hat-finder.png';
import howToPlayGif from '../../../../../resource/projects/hat-finder/how-to-play.gif';

function HatFinder(props) {

    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;Find Your Hat is the JavaScript challenge Project from <a href='https://www.codecademy.com/projects/practice/find-your-hat' target='_blank'>codecademy</a>. The interactive game that player have to move the character to the goal. There is a challenge to generate the field that can actually be solved without a dead-end way and I decide to solve it by using a* pathfinder algorithm.
                </div>
                <hr/>
                <div className='hatfinder-gif'>
                    <img src={howToPlayGif} />
                </div>
                <hr/>
                <div>
                    <a href='https://thitithorn-k.github.io/project/game/hat-finder/' target='_blank'>DEMO - Find Your Hat</a>
                </div>
                <div>
                    Source Code : <a href='https://github.com/thitithorn-k/thitithorn-k.github.io/tree/main/project/game/hat-finder' target='_blank'>Github</a>
                </div>
            </div>
        </div>
    );
}

export default HatFinder;