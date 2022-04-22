import { useState, useEffect } from 'react';

import Project from './Project/Project';
import ProjectPage from './ProjectPage/ProjectPage';

import './Projects.css';

import tenrunImg from '../../resource/projects/tenrun/tenrun-small.png';
import genshinAutoInfoImg from '../../resource/projects/genshin-auto-info/genshin-auto-info.png';
import genshinBartenderAutoRecipesImg from '../../resource/projects/genshin-bartender-auto-recipes/genshin-bartender-auto-recipes.png';
import hatFinderImg from '../../resource/projects/hat-finder/hat-finder.png';
import throwThePodiumImg from '../../resource/projects/throw-the-podium/throw-the-podium.jpg';
import tapistImg from '../../resource/projects/tapist/tapist.png'

import Tenrun from './ProjectPage/ProjectPages/Tenrun/Tenrun';
import GenshinAutoInfo from './ProjectPage/ProjectPages/GenshinAutoInfo/GenshinAutoInfo';
import GenshinBartenderAutoRecipes from './ProjectPage/ProjectPages/GenshinBartenderAutoRecipes/GenshinBartenderAutoRecipes';
import HatFinder from './ProjectPage/ProjectPages/HatFinder/HatFinder';
import ThrowThePodium from './ProjectPage/ProjectPages/ThrowThePodium/ThrowThePodium';
import Tapist from './ProjectPage/ProjectPages/Tapist/Tapist';

const project = [
    {
        name: 'Tenrun',
        short: 'The exercise activitiy recorder web app',
        detail: 'Tenrun, exercise activities recorder web app',
        link: 'https://github.com/thitithorn-k/GenshinAutoInfo',
        image: tenrunImg,
        tags: ['Javascript', 'React', 'Express', 'NodeJs', 'MongoDB'],
        project_page: <Tenrun />
    },
    {
        name: 'Genshin Auto Info',
        short: 'The artifact scanner and damage calculator python program for Genshin Impact',
        detail: 'The python programs for the action-RPG game Genshin Impact. Mainly intended to helping players calculate in-game character attack damage.',
        link: 'https://github.com/thitithorn-k/GenshinAutoInfo',
        image: genshinAutoInfoImg,
        tags: ['Python', 'Open-cv'],
        project_page: <GenshinAutoInfo />
    },
    {
        name: 'Genshin Bartender Auto Recipes',
        short: 'The recipe scanner python program for Genshin Impact',
        detail: 'The python programs for the action-RPG game Genshin Impact. Mainly intended to helping player by showing the recipe of a drink in \'Of Drink A-Dreaming\' event',
        link: 'https://github.com/thitithorn-k/genshin-bartender-auto-recipes',
        image: genshinBartenderAutoRecipesImg,
        tags: ['Python', 'Open-cv'],
        project_page: <GenshinBartenderAutoRecipes />
    },
    {
        name: 'Find Your Hat - Challenge Project',
        short: 'The JavaScript challenge Project from codecademy',
        detail: 'The JavaScript challenge Project from codecademy. The interactive game that player have to move the character to the goal. There is a challenge to generate the field that can actually be solved without a dead-end way and I decide to solve it by using a* pathfinder algorithm.',
        link: 'https://thitithorn-k.github.io/project/game/hat-finder/',
        image: hatFinderImg,
        tags: ['Javascript', 'a* pathfinder'],
        project_page: <HatFinder />
    },
    {
        name: 'Throw the Podium',
        short: 'The Android indie game. Made with Unity',
        detail: 'The first app that I published to the Google Play store in 2020, was created by Unity written in C#. I learned that any app publish an app to the store must be signed. The app was removed from the store because of the Unity-ads problem and all the source code is missing. But the apk file is still available.',
        link: 'https://tuipied-my.sharepoint.com/:u:/g/personal/thitithorn_kre_dome_tu_ac_th/EXA8G-sljWxLtmbIhEiqz4ABzPYYcVYbmNJA3xIObcg7rg?e=tKKEl7',
        image: throwThePodiumImg,
        tags: ['C#', 'Unity', 'Windows', 'game'],
        project_page: <ThrowThePodium />
    },
    {
        name: 'Tapist rhythm-game',
        short: 'The Windows rhythm game. Made with Unity',
        detail: 'The Windows rhythm game I created in 2018 using Unity. I have inspiration from Project Diva, the rhythm game from SONY. The game is still in development, doesn\'t have a beautiful interface, and missing many necessary interactive pages but the main core of the rhythm game is working as expected.',
        link: 'https://github.com/thitithorn-k/tapist-rhythm-game',
        image: tapistImg,
        tags: ['C#', 'Unity', 'Android', 'game'],
        project_page: <Tapist />
    },
]


function Projects(props) {
    
    const [ openPage, setOpenPage ] = useState(false);
    const [ selectedProject, setSelectedProject ] = useState({});

    return (
        <section id='projects' className='projects-section no-snap'>
            <div className='projects-border'>
                <div className='projects-header'>Projects</div>
                <div className='projects'>
                    {
                        project.map((eachProject, index) => {
                            return <Project project={eachProject} key={'project-' + index} index={index+1} setOpenPage={setOpenPage} setSelectedProject={setSelectedProject} />
                        })
                    }
                </div>
            </div>
            <ProjectPage openPage={openPage} setOpenPage={setOpenPage} selectedProject={selectedProject} />
        </section>
    );
}

export default Projects;