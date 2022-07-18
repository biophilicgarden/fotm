import React, { useEffect } from 'react';
import { ReactComponent as Tap } from '../assets/icons/tap.svg';

export default function TapGesture( {showGesture, setShowGesture} ) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGesture(false);
        }, 3000);

        return () => {
            return () => {clearTimeout(timer);
            setShowGesture(true);}
          };
    }, [setShowGesture]);

    return (
        <div id="tap-gesture">{showGesture && <Tap/> }</div>
    );
}