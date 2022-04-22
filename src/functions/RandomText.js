const ABCchar = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'

function RandomText(text, setState, randomRound=3, randomWaitTime=10){
    const len = text.length;
    const RandChar = () => { return ABCchar[Math.floor(Math.random()*ABCchar.length)] };
    let currentIndex = 0;
    let tempText = '';
    const ProcessText = () => {
        if(tempText.length < len){
            let randCount = 0;
            const randCharInterval = setInterval(() => {
                if(randCount < randomRound){
                    setState(tempText + RandChar());
                    randCount += 1;
                } else {
                    tempText = tempText + text[currentIndex]
                    setState(tempText);
                    currentIndex += 1;
                    clearInterval(randCharInterval);
                    ProcessText()
                }
            }, randomWaitTime);
        }
    }
    ProcessText();
}

export default RandomText;