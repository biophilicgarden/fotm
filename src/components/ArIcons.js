/* eslint-disable jsx-a11y/alt-text */
import {React, useState, useEffect, useCallback} from 'react';
import InfoPanel from './InfoPanel';

// icons
import { ReactComponent as HeartIcon } from '../assets/icons/heart-solid-black.svg';
import { ReactComponent as SmileIcon } from '../assets/icons/face-grin-regular-black.svg';
import { ReactComponent as ThumbsIcon } from '../assets/icons/thumbs-up-solid-black.svg';
import { ReactComponent as HandIcon } from '../assets/icons/hand-solid-black.svg';
import { ReactComponent as EyeIcon } from '../assets/icons/eye-solid-black.svg';

export default function ArIcons({data, targetIndex, iconUIShow, setIconUIShow, setShowScanningUI, droppedTarget, setBtnBottomShow, setModelShow}) {
  const [plantData, setPlantData] = useState([]);
  const [heartClick, setHeartClick] = useState(false);
  const [eyeClick, setEyeClick] = useState(false);
  const [smileClick, setSmileClick] = useState(false);
  const [thumbsClick, setThumbsClick] = useState(false);
  const [handClick, setHandClick] = useState(false);

  const handleHeartClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setHeartClick(true);
  }, [setIconUIShow, setModelShow]);

  const handleEyeClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setEyeClick(true);
  }, [setIconUIShow, setModelShow]);

  const handleSmileClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setSmileClick(true);
  }, [setIconUIShow, setModelShow]);

  const handleThumbsClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setThumbsClick(true);
  }, [setIconUIShow, setModelShow]);

  const handleHandClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setHandClick(true);
  }, [setIconUIShow, setModelShow]);

  const removePanel = useCallback(() => {
    // setReflection(true);
    setIconUIShow(true);
    setModelShow(true);
    setHeartClick(false);
    setEyeClick(false);
    setSmileClick(false);
    setThumbsClick(false);
    setHandClick(false);
    if (droppedTarget) { setShowScanningUI(true) };
    droppedTarget ? setBtnBottomShow(true) : setBtnBottomShow(false);
  }, [droppedTarget, setBtnBottomShow, setIconUIShow, setModelShow, setShowScanningUI]);

  // add event listeners to the invisible planes in front of the pathways icons
  useEffect(() => {
    const heartPlane = document.querySelector('#heart-plane');
    if (heartPlane) { heartPlane.addEventListener('click', handleHeartClick); }

    const eyePlane = document.querySelector('#eye-plane');
    if (eyePlane) { eyePlane.addEventListener('click', handleEyeClick); }

    const smilePlane = document.querySelector('#smile-plane');
    if (smilePlane) { smilePlane.addEventListener('click', handleSmileClick); }

    const thumbsPlane = document.querySelector('#thumbs-plane');
    if (thumbsPlane) { thumbsPlane.addEventListener('click', handleThumbsClick); }

    const handPlane = document.querySelector('#hand-plane');
    if (handPlane) { handPlane.addEventListener('click', handleHandClick); }

    return () => {
      if(heartPlane) heartPlane.removeEventListener('click', handleHeartClick);
      if(eyePlane) eyePlane.removeEventListener('click', handleEyeClick);
      if(smilePlane) smilePlane.removeEventListener('click', handleSmileClick);
      if(thumbsPlane) thumbsPlane.removeEventListener('click', handleThumbsClick);
      if(handPlane) handPlane.removeEventListener('click', handleHandClick);
    };
  }, [handleEyeClick, handleHandClick, handleHeartClick, handleSmileClick, handleThumbsClick, iconUIShow]);

  // on the first render the data will not have been parsed so listen for changes to the handed-down props
  useEffect(() => {
    if (data !== null) {
      setPlantData(data);
    }
  }, [data]);

  return (
    iconUIShow ?
      <a-entity>

        {/* HEART - COMPASSION */}
        <a-entity id='text' text={`value: Compassion; color: #FFF`} position='-0.275 -0.5 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='heart-model' class='clickable' src='#heartModel' position='-1 -0.3 1' scale='8 8 8' rotation='90 0 0'></a-gltf-model>
        <a-plane id='heart-plane' class='clickable' position='-1 -0.3 1.1' scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>

        {/* EYE - BEAUTY*/}
        <a-entity id='text' text={`value: Beauty; color: #FFF`} position='0 0.15 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='eye-model' class='clickable' src='#eyeModel' position='-0.85 0.4 1' scale='8 8 8' rotation='90 0 0'></a-gltf-model>
        <a-plane id='eye-plane' class='clickable' position='-0.85 0.4 1.1' scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>

        {/* SMILE - EMOTION */}
        <a-entity id='text' text={`value: Emotion; color: #FFF`} position='0.63 0.68 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='smile-model' class='clickable' src='#smileModel' position='-0.2 0.9 1' scale='8 8 8' rotation='90 0 0'></a-gltf-model>
        <a-plane id='smile-plane' class='clickable' position='-0.2 0.9 1.1' scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>

        {/* THUMBS - MEANING */}
        <a-entity id='text' text={`value: Meaning; color: #FFF`} position='1.25 0.15 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='thumbs-model' class='clickable' src='#thumbsModel' position='0.45 0.4 1' scale='8 8 8' rotation='90 0 0'></a-gltf-model>
        <a-plane id='thumbs-plane' class='clickable' position='0.45 0.4 1.1' scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>

        {/* HAND - SENSES */}
        <a-entity id='text' text={`value: Senses; color: #FFF`} position='1.45 -0.55 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='hand-model' class='clickable' src='#handModel' position='0.6 -0.3 1' scale='8 8 8' rotation='90 0 0'></a-gltf-model>
        <a-plane id='hand-plane' class='clickable' position='0.6 -0.3 1.1' scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>

      </a-entity>

    // render the info or reflection panel
    : heartClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={7} icon={<HeartIcon/>}/>
    : eyeClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={4} icon={<EyeIcon/>}/>
    : smileClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={5} icon={<SmileIcon/>}/>
    : thumbsClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={6} icon={<ThumbsIcon/>}/>
    : handClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={3} icon={<HandIcon/>}/>
    
    // fallback solution in case some weird state is encountered
    : setIconUIShow(true)
  );
}