import { React, useEffect } from 'react';
import Meditation from '../assets/audio/meditation-bell.wav';

export default function ReflectionPanel({reflectionText, removeReflection}) {

    useEffect(() => {
        const audio = new Audio(Meditation);
        audio.volume = 0.2;
        audio.play()
      }, [])

    return (        
        <div id="reflection-container">
            <div className="reflection-panel">
                <div className="reflection-content" onClick={removeReflection}>
                    <div className="reflection-text">{reflectionText}</div>
                </div>
            </div>
        </div> 
    );
}