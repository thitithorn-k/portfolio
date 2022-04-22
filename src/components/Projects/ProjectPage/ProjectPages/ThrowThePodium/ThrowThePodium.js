import '../ProjectPages.css';
import './ThrowThePodium.css';
import headerImg from '../../../../../resource/projects/throw-the-podium/throw-the-podium.jpg';

import googlePlayImg from '../../../../../resource/projects/throw-the-podium/google-play-console.png';
import appRemovedImg from '../../../../../resource/projects/throw-the-podium/app-removed.png';

import ex1 from '../../../../../resource/projects/throw-the-podium/ex1.jpg';
import ex2 from '../../../../../resource/projects/throw-the-podium/ex2.jpg';
import ex3 from '../../../../../resource/projects/throw-the-podium/ex3.jpg';
import ex4 from '../../../../../resource/projects/throw-the-podium/ex4.jpg';
import ex5 from '../../../../../resource/projects/throw-the-podium/ex5.jpg';

function ThrowThePodium(props) {

    return (
        <div className='project-article'>
            <div className='project-article-header'>
                <img className='project-article-header-img' src={headerImg} />
            </div>
            <div className='project-article-body'>
                <div>
                    &emsp;Throw The Podium is the first app that I published to the Google Play store in 2018, was created by Unity written in C#. I learned that any app publish an app to the store must be signed. The app was removed from the store because of the Unity-ads problem and all the source code is missing. But the apk file is still available.
                </div>
                <hr/>
                <div className='throw-the-podium-ex'>
                    <img src={ex1} />
                    <img src={ex2} />
                    <img src={ex3} />
                    <img src={ex4} />
                    <img src={ex5} />
                </div>
                <hr/>
                <div>Throw The Podium was once published to the Google play store.</div>
                <img width='100%' style={{marginBottom: '8px'}} src={googlePlayImg} />
                <div>But it was removed because of some policy violation (I think it was because of in-app ads from Unity ads)</div>
                <img width='100%' src={appRemovedImg} />
                <hr/>
                <div>
                    Download : <a href='https://tuipied-my.sharepoint.com/:u:/g/personal/thitithorn_kre_dome_tu_ac_th/EXA8G-sljWxLtmbIhEiqz4ABzPYYcVYbmNJA3xIObcg7rg?e=tKKEl7' target='_blank'>APK File</a>
                </div>
                <div>
                    My source code is missing... At that time I didn't know Github yet. 😥
                </div>
                <hr/>
                <div>
                    more information, video, detail, etc. will update soon...
                </div>
            </div>
        </div>
    );
}

export default ThrowThePodium;