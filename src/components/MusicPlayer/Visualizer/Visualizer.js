import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Visualizer.css';

function Visualizer(props) {

    const [ last1, setLast1 ] = useState(0);
    const [ last2, setLast2 ] = useState(0);
    const [ last3, setLast3 ] = useState(0);
    const bar0 = useRef();
    const bar1 = useRef();
    const bar2 = useRef();
    const bar3 = useRef();
    const bar4 = useRef();
    const bar5 = useRef();
    const bar6 = useRef();
    const bar7 = useRef();

    useEffect(() => {
        // console.log(props.audioElement.current.volume);
        if(props.audioDataArray)
        {
            // console.log(props.audioDataArray);
            const tempBar = [];
            for(let i=0; i<8; i++){
                // const newArray = props.audioDataArray.slice((i*4)+4, (i*4)+5);
                // const sum = newArray.reduce((a, b) => a + b, 0);
                // const avg = (sum / 1) || 0;
                const avg = props.audioDataArray[(i*8)+1]
                tempBar.push(avg/255*80);
                // console.log(avg/255*80);
                // console.log((avg/(255*props.audioElement.current.volume))*100);
                
            }
            // avgNow /= 8;
            
            // const diff = Math.abs(props.audioDataArray[1] - last1);
            // const diff2 = Math.abs(props.audioDataArray[24] - last2);
            // const diff3 = Math.abs(props.audioDataArray[252] - last3);
            // if(diff > 12) console.log('diff= ' + diff);
            // else if(diff2 > 15) console.log('diff2= ' + diff2);
            // else if(diff3 > 12) console.log('diff3= ' + diff3);
            // console.log(`avgSum = ${avgSum} last=${lastAvg}`);
            // setLast1(props.audioDataArray[1]);
            // setLast2(props.audioDataArray[24]);
            // setLast3(props.audioDataArray[252]);
            // console.log(tempBar);
            gsap.to(bar0.current, {height: tempBar[0], duration: 0.06 });
            gsap.to(bar1.current, {height: tempBar[1], duration: 0.06 });
            gsap.to(bar2.current, {height: tempBar[2], duration: 0.06 });
            gsap.to(bar3.current, {height: tempBar[3], duration: 0.06 });
            gsap.to(bar4.current, {height: tempBar[4], duration: 0.06 });
            gsap.to(bar5.current, {height: tempBar[5], duration: 0.06 });
            gsap.to(bar6.current, {height: tempBar[6], duration: 0.06 });
            gsap.to(bar7.current, {height: tempBar[7], duration: 0.06 });
        }
        if(!props.isPlaying){
            gsap.to(bar1.current, {height: 0, duration: 0.5 });
            gsap.to(bar2.current, {height: 0, duration: 0.5 });
            gsap.to(bar0.current, {height: 0, duration: 0.5 });
            gsap.to(bar3.current, {height: 0, duration: 0.5 });
            gsap.to(bar4.current, {height: 0, duration: 0.5 });
            gsap.to(bar5.current, {height: 0, duration: 0.5 });
            gsap.to(bar6.current, {height: 0, duration: 0.5 });
            gsap.to(bar7.current, {height: 0, duration: 0.5 });
        }
    });

    return(
        <div className='visualizer'>
            <div className='visualizer-bar' ref={bar0} />
            <div className='visualizer-bar' ref={bar1} />
            <div className='visualizer-bar' ref={bar2} />
            <div className='visualizer-bar' ref={bar3} />
            <div className='visualizer-bar' ref={bar4} />
            <div className='visualizer-bar' ref={bar5} />
            <div className='visualizer-bar' ref={bar6} />
            <div className='visualizer-bar' ref={bar7} />
        </div>
    );
}

export default Visualizer;