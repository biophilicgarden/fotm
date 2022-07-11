/* eslint-disable jsx-a11y/alt-text */
import {React, useState, useEffect, useCallback} from 'react';
import InfoPanel from './InfoPanel';
import ReflectionPanel from './ReflectionPanel';

// icons
import { ReactComponent as HeartIcon } from '../assets/icons/heart-solid-black.svg';
import { ReactComponent as SmileIcon } from '../assets/icons/face-grin-regular-black.svg';
import { ReactComponent as ThumbsIcon } from '../assets/icons/thumbs-up-solid-black.svg';
import { ReactComponent as HandIcon } from '../assets/icons/hand-solid-black.svg';
import { ReactComponent as EyeIcon } from '../assets/icons/eye-solid-black.svg';

export default function ArIcons({data, targetIndex, iconUIShow, setIconUIShow, setShowScanningUI, droppedTarget, setBtnBottomShow}) {
  const [plantData, setPlantData] = useState([]);
  const [heartClick, setHeartClick] = useState(false);
  const [eyeClick, setEyeClick] = useState(false);
  const [smileClick, setSmileClick] = useState(false);
  const [thumbsClick, setThumbsClick] = useState(false);
  const [handClick, setHandClick] = useState(false);
  const [reflection, setReflection] = useState(false);

  const handleHeartClick = useCallback((event) => {
    setIconUIShow(false);
    setHeartClick(true);
  }, [setIconUIShow]);

  const handleEyeClick = useCallback((event) => {
    setIconUIShow(false);
    setEyeClick(true);
  }, [setIconUIShow]);

  const handleSmileClick = useCallback((event) => {
    setIconUIShow(false);
    setSmileClick(true);
  }, [setIconUIShow]);

  const handleThumbsClick = useCallback((event) => {
    setIconUIShow(false);
    setThumbsClick(true);
  }, [setIconUIShow]);

  const handleHandClick = useCallback((event) => {
    setIconUIShow(false);
    setHandClick(true);
  }, [setIconUIShow]);

  const removeReflection = useCallback(() => {
    setReflection(false)
    setIconUIShow(true);
    setHeartClick(false);
    setEyeClick(false);
    setSmileClick(false);
    setThumbsClick(false);
    setHandClick(false);
    if (droppedTarget) { setShowScanningUI(true) };
    droppedTarget ? setBtnBottomShow(true) : setBtnBottomShow(false);
    }, [droppedTarget, setBtnBottomShow, setIconUIShow, setShowScanningUI]);

  const removePanel = useCallback(() => {
    setReflection(true);
    setHeartClick(false);
    setEyeClick(false);
    setSmileClick(false);
    setThumbsClick(false);
    setHandClick(false);
  }, []);

  useEffect(() => {
    const heartModel = document.querySelector('#heart-model');
    if (heartModel) { heartModel.addEventListener('click', handleHeartClick); }

    const eyeModel = document.querySelector('#eye-model');
    if (eyeModel) { eyeModel.addEventListener('click', handleEyeClick); }

    const smileModel = document.querySelector('#smile-model');
    if (smileModel) { smileModel.addEventListener('click', handleSmileClick); }

    const thumbsModel = document.querySelector('#thumbs-model');
    if (thumbsModel) { thumbsModel.addEventListener('click', handleThumbsClick); }
 
    const handModel = document.querySelector('#hand-model');
    if (handModel) { handModel.addEventListener('click', handleHandClick); }

    return () => {
      if(heartModel) heartModel.removeEventListener('click', handleHeartClick);
      if(eyeModel) eyeModel.removeEventListener('click', handleEyeClick);
      if(smileModel) smileModel.removeEventListener('click', handleSmileClick);
      if(thumbsModel) thumbsModel.removeEventListener('click', handleThumbsClick);
      if(handModel) handModel.removeEventListener('click', handleHandClick);
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
        <a-entity id='text' text={`value: Compassion; color: #FFF`} position='-0.1 -0.35 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='heart-model' class='clickable' src='#heartModel' position='-1.1 -0.3 1' scale='4 4 4' rotation='90 0 0'></a-gltf-model>

        {/* EYE - BEAUTY*/}
        <a-entity id='text' text={`value: Beauty; color: #FFF`} position='0.3 0.35 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='eye-model' class='clickable' src='#eyeModel' position='-0.85 0.4 1' scale='4 4 4' rotation='90 0 0'></a-gltf-model>

        {/* SMILE - EMOTION */}
        <a-entity id='text' text={`value: Emotion; color: #FFF`} position='0.9 0.8 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='smile-model' class='clickable' src='#smileModel' position='-0.2 0.9 1' scale='4 4 4' rotation='90 0 0'></a-gltf-model>

        {/* THUMBS - MEANING */}
        <a-entity id='text' text={`value: Meaning; color: #FFF`} position='1.55 0.35 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='thumbs-model' class='clickable' src='#thumbsModel' position='0.45 0.4 1' scale='4 4 4' rotation='90 0 0'></a-gltf-model>

        {/* HAND - SENSES */}
        <a-entity id='text' text={`value: Senses; color: #FFF`} position='1.9 -0.39 1' scale='2 2 2' wireframe='true'></a-entity>
        <a-gltf-model id='hand-model' class='clickable' src='#handModel' position='0.7 -0.3 1' scale='4 4 4' rotation='90 0 0'></a-gltf-model>

      </a-entity>

    // render the info or reflection panel
    : heartClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={7} icon={<HeartIcon/>}/>
    : eyeClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={4} icon={<EyeIcon/>}/>
    : smileClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={5} icon={<SmileIcon/>}/>
    : thumbsClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={6} icon={<ThumbsIcon/>}/>
    : handClick ? <InfoPanel removePanel={removePanel} data={plantData} targetIndex={targetIndex} col={3} icon={<HandIcon/>}/>
    : reflection ?
    (<>
      {/* <a-box color="red" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box> */}
      <ReflectionPanel reflectionText={plantData[targetIndex][8]} removeReflection={removeReflection}/>
    </>)
    
    // fallback solution in case some weird state is encountered
    : setIconUIShow(true)
  );
}