import song from '../../media/Infraction-Cyber-Attack-pr.mp3';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MusicPlayer.css';
import Visualizer from './Visualizer/Visualizer';
import TimeBar from './TimeBar/TimeBar';
import MusicController from './MusicController/MusicController';

function MusicPlayer(props) {
    const volumeBar = useRef();
    const audioElement = useRef();
    const timeBar = useRef();

    const [ audioDataArray, setAudioDataArray ] = useState();
    const [ analyser, setAnalyser ] = useState();
    const [ timming, setTimming ] = useState(0);
    const [ timeSec, setTimeSec ] = useState(0);
    const [ duration, setDuration ] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);
    
    const LoadMusic = () => {
        audioElement.current.load();
        audioElement.current.volume = 0.1;
    }

    const PlayMusic = () => {
        setIsPlaying(true);
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const src = context.createMediaElementSource(audioElement.current);
        const analyserTemp = context.createAnalyser();

        src.connect(analyserTemp);
        analyserTemp.connect(context.destination);
        analyserTemp.fftSize = 256;

        const bufferLength = analyserTemp.frequencyBinCount;
        console.log(bufferLength);

        const dataArray = new Uint8Array(bufferLength);

        analyserTemp.getByteFrequencyData(dataArray);
        setAudioDataArray(dataArray);
        setAnalyser(analyserTemp);
    }



    useEffect(() => {
        LoadMusic();
    }, [])

    useEffect(() => {
        if(props.startSite && props.playMusic){
            PlayMusic();
        }
        setDuration(audioElement.current.duration);
    }, [props.startSite])

    useEffect(() => {
        if(analyser){
            const analyseDataArray = setInterval(() => {
                let audioDataArrayTemp = audioDataArray;
                analyser.getByteFrequencyData(audioDataArrayTemp);
                setTimming(audioElement.current.currentTime*100)
                setAudioDataArray(audioDataArrayTemp);
            }, 1);
            return () => clearInterval(analyseDataArray);
        }
    }, [[props.startSite, analyser, audioDataArray]])

    useEffect(() => {
        const timmerSec = setInterval(() => {
            setTimeSec(audioElement.current.currentTime);
        }, 1000);
        return () => clearInterval(timmerSec);
    }, [])

    useEffect(() => {
        if(isPlaying){
            if(!analyser){
                PlayMusic();
                audioElement.current.play();
            } else {
                audioElement.current.play();
            }
        } else {
            audioElement.current.pause();
        }
    }, [isPlaying]);

    const getStringTime = (sec) => {
        const m = Math.floor(sec/60);
        const s = Math.round(sec)%60;
        return (m>9? m:'0'+m) + ':' + (s>9? s:'0'+s)
    }

    const setPlayerTime = (sec) => {
        audioElement.current.currentTime = sec;
    }

    return(
        <div className='music-player'>
            <audio src={song} ref={audioElement} ></audio>
            <div className='toggle-div'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/></svg>
            </div>
            <TimeBar timming={timming/duration} duration={duration} setPlayerTime={setPlayerTime}/>
            <div className='music-console'>
                <Visualizer audioDataArray={audioDataArray} audioElement={audioElement} isPlaying={isPlaying}/>
                <div className='music-controller-section'>
                    <MusicController audioElement={audioElement} isPlaying={isPlaying} setIsPlaying={setIsPlaying} timming={timeSec/duration}/>
                </div>
                <div className='time-text'>
                    <div className='time-current'>
                        <span className='time-text-font'>{getStringTime(timeSec)}</span>
                        <span className='time-text-back'>00:00</span>
                    </div>
                    <div className='time-duration'>
                        <span className='time-text-font'>{getStringTime(duration)}</span>
                        <span className='time-text-back'>00:00</span>
                    </div>
                </div>
            </div>
            {/* <div className='volume-bar' ref={volumeBar} ></div> */}
        </div>
    );
}

export default MusicPlayer;