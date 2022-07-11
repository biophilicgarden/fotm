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
            <div className="reflection-content" onClick={removeReflection}>
                <blockquote className="reflection-text"><p>{reflectionText}</p></blockquote>
            </div>
        </div> 
    );
}