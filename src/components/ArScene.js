/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import ArIcons from './ArIcons';
import ReflectionPanel from './ReflectionPanel';
import TapGesture from './TapGesture';

// 3D models
import HeartModel from '../assets/models/heart.glb'
import EyeModel from '../assets/models/eye.glb'
import SmileModel from '../assets/models/face.glb'
import ThumbsModel from '../assets/models/thumbs.glb'
import HandModel from '../assets/models/hand.glb'

// final assets
import Berries from '../assets/models/berries_v2.glb'
import Honeysuckle from '../assets/models/honeysuckle.glb'
import Cranesbill from '../assets/models/cranesbill.glb'
import Birch from '../assets/models/birch.glb'
import MaidenPink from '../assets/models/maidenpink.glb'
import Campanula from '../assets/models/campanula.glb'


// compiled target file
const target = 'targets-final.mind';

function ArScene({ data, reflections, setShowScanningUI, removeMainPanel, setBtnBottomShow }) {
  const sceneRef = useRef(null);
  const target0 = useRef(null);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const target3 = useRef(null);
  const target4 = useRef(null);
  const target5 = useRef(null);

  const [plantData, setPlantData] = useState([]);
  const [reflectionQuestions, setReflectionQuestions] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [targetFound, setTargetFound] = useState(-1);
  const [droppedTarget, setDroppedTarget] = useState(false);
  const [iconUIShow, setIconUIShow] = useState(true);
  const [modelShow, setModelShow] = useState(true);
  const [reflection, setReflection] = useState(false);

  const [showGesture, setShowGesture] = useState(true);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems['mindar-image-system'];

    sceneEl.addEventListener('renderstart', () => {
      arSystem.start();
    });

    return() => {
      arSystem.stop();
    };

  }, [sceneRef]);

  useEffect(() => {
    const targetEl0 = target0.current;
    if (targetEl0) {
      targetEl0.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl0.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
  }

    const targetEl1 = target1.current;
    if (targetEl1) {
      targetEl1.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl1.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
    }

    const targetEl2 = target2.current;
    if (targetEl2) {
      targetEl2.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl2.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
    }

    const targetEl3 = target3.current;
    if (targetEl3) {
      targetEl3.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl3.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
    } 

    const targetEl4 = target4.current;
    if (targetEl4) {
      targetEl4.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl4.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
    } 

    const targetEl5 = target5.current;
    if (targetEl5) {
      targetEl5.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setShowGesture(true);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl5.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
        setShowGesture(false);
      });
    } 

  }, [setShowScanningUI, targetFound, iconUIShow, removeMainPanel, setBtnBottomShow]);

  const handleModelClick = useCallback((event) => {
    setIconUIShow(false);
    setModelShow(false);
    setReflection(true);
  }, [setIconUIShow, setModelShow]);

  const removeReflection = useCallback((event) => {
    setReflection(false);
    setIconUIShow(true);
    setModelShow(true);
    if (droppedTarget) { setShowScanningUI(true) };
    droppedTarget ? setBtnBottomShow(true) : setBtnBottomShow(false);
  }, [droppedTarget, setBtnBottomShow, setIconUIShow, setModelShow, setShowScanningUI]);


  useEffect(() => {
    const berriesModel = document.querySelector('#berries-plane');
    if (berriesModel) { berriesModel.addEventListener('click', handleModelClick); }

    const birchModel = document.querySelector('#birch-plane');
    if (birchModel) { birchModel.addEventListener('click', handleModelClick); }

    const honeysuckleModel = document.querySelector('#honeysuckle-plane');
    if (honeysuckleModel) { honeysuckleModel.addEventListener('click', handleModelClick); }

    const cransebillModel = document.querySelector('#cranesbill-plane');
    if (cransebillModel) { cransebillModel.addEventListener('click', handleModelClick); }

    const pinkmaidenModel = document.querySelector('#pinkmaiden-plane');
    if (pinkmaidenModel) { pinkmaidenModel.addEventListener('click', handleModelClick); }

    const campanulaModel = document.querySelector('#campanula-plane');
    if (campanulaModel) { campanulaModel.addEventListener('click', handleModelClick); }

    return () => {
      if(berriesModel) berriesModel.removeEventListener('click', handleModelClick);
      if(birchModel) birchModel.removeEventListener('click', handleModelClick);
      if(honeysuckleModel) honeysuckleModel.removeEventListener('click', handleModelClick);
      if(cransebillModel) cransebillModel.removeEventListener('click', handleModelClick);
      if(pinkmaidenModel) pinkmaidenModel.removeEventListener('click', handleModelClick);
      if(campanulaModel) campanulaModel.removeEventListener('click', handleModelClick);
    };
  }, [handleModelClick, iconUIShow, targetFound]);


  // make sure to set the data in state once file has been parsed
  useEffect(() => {
    if (data !== null) {
      setPlantData(data);
    }
  }, [data]);

  // generate a random index for reflection question
  useEffect(() => {
    if (reflections !== null) {
      setReflectionQuestions(reflections);
      setRandomIndex(Math.floor(Math.random() * (reflections.length - 1)) + 1);
    }
  }, [reflections, targetFound])

  // [DEBUG]
  // useEffect(() => {
  //   console.log(`target found ${targetFound}`);
  // }, [targetFound]);

  return (
    <a-scene ref={sceneRef}
      mindar-image={
      `imageTargetSrc: ${window.location.origin}${window.location.pathname}/${target};
      autoStart: false;
      uiLoading: no;
      uiError: no;
      uiScanning: no;
      missTolerance: 5;
      filterMinCF: 0.00001;
      filterBeta: 10;`
      }
      vr-mode-ui='enabled: false'
      device-orientation-permission-ui='enabled: false'
      >

      {/* asset registration */}
      <a-assets timeout="10000">
        <a-asset-item id="heartModel" src={HeartModel}></a-asset-item>
        <a-asset-item id="eyeModel" src={EyeModel}></a-asset-item>
        <a-asset-item id="smileModel" src={SmileModel}></a-asset-item>
        <a-asset-item id="thumbsModel" src={ThumbsModel}></a-asset-item>
        <a-asset-item id="handModel" src={HandModel}></a-asset-item>
        <a-asset-item id="berries" src={Berries}></a-asset-item>
        <a-asset-item id="honeysuckle" src={Honeysuckle}></a-asset-item>
        <a-asset-item id="cranesbill" src={Cranesbill}></a-asset-item>
        <a-asset-item id="birch" src={Birch}></a-asset-item>
        <a-asset-item id="maidenpink" src={MaidenPink}></a-asset-item>
        <a-asset-item id="campanula" src={Campanula}></a-asset-item>
      </a-assets>

      {/* Define a mixin for the rotation animation */}
      <a-mixin id="rotateY" 
        animation__m="property: rotation; to: 0 360 0; loop: true; dur: 7000; easing:linear;">
      </a-mixin> 

      {/* add camera with raycaster looking for clickable targets */}
      <a-camera
        id='camera'
        position='0 0 0'
        look-controls='enabled: false'
        cursor='fuse: false; rayOrigin: mouse;'
        // eslint-disable-next-line no-template-curly-in-string
        raycaster='far: ${customFields.libVersion}; objects: .clickable'
        >
      </a-camera> 
      
      <a-entity ref={target0} mindar-image-target='targetIndex: 0' id='plantUiLayer'>      
        { targetFound === 0 &&
          <>
          { reflection ?
            <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
            :
            <a-entity>
              { modelShow? <a-gltf-model id='berries-model' class='clickable' src='#berries' position='-0.2 -0.5 1' scale='1 1 1' mixin="rotateY"></a-gltf-model> : null }
              <a-plane id='berries-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                <ArIcons
                data={plantData}
                targetIndex="1"
                iconUIShow={iconUIShow}
                setIconUIShow={setIconUIShow}
                setShowScanningUI={setShowScanningUI}
                droppedTarget={droppedTarget}
                setBtnBottomShow={setBtnBottomShow}
                setModelShow={setModelShow}
                />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

      <a-entity ref={target1} mindar-image-target='targetIndex: 1' id='plantUiLayer'>
        { targetFound === 1 &&  
          <>
            { reflection ?
              <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
              :
              <a-entity>
                { modelShow ? <a-gltf-model id='birch-model' class='clickable' src='#birch' position='-0.2 -0.5 1' scale='0.5 0.5 0.5' mixin="rotateY"></a-gltf-model> : null }
                  <a-plane id='birch-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                  <ArIcons
                  data={plantData}
                  targetIndex="2"
                  iconUIShow={iconUIShow}
                  setIconUIShow={setIconUIShow}
                  setShowScanningUI={setShowScanningUI}
                  droppedTarget={droppedTarget}
                  setBtnBottomShow={setBtnBottomShow}
                  setModelShow={setModelShow}
                  />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

      <a-entity ref={target2} mindar-image-target='targetIndex: 2' id='plantUiLayer'>
        { targetFound === 2 &&  
          <>
            { reflection ?
              <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
              :
              <a-entity>
                { modelShow? <a-gltf-model id='honeysuckle-model' class='clickable' src='#honeysuckle' position='-0.2 -0.3 1' scale='1.3 1.3 1.3' mixin="rotateY"></a-gltf-model> : null }
                <a-plane id='honeysuckle-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                  <ArIcons
                  data={plantData}
                  targetIndex="3"
                  iconUIShow={iconUIShow}
                  setIconUIShow={setIconUIShow}
                  setShowScanningUI={setShowScanningUI}
                  droppedTarget={droppedTarget}
                  setBtnBottomShow={setBtnBottomShow}
                  setModelShow={setModelShow}
                  />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

      <a-entity ref={target3} mindar-image-target='targetIndex: 3' id='plantUiLayer'>
        { targetFound === 3 &&  
          <>
            { reflection ?
              <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
              :
              <a-entity>
                { modelShow ? <a-gltf-model id='cranesbill-model' class='clickable' src='#cranesbill' position='-0.2 -0.5 1' scale='1.5 1.5 1.5' mixin="rotateY"></a-gltf-model> : null }
                <a-plane id='cranesbill-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                  <ArIcons
                  data={plantData}
                  targetIndex="4"
                  iconUIShow={iconUIShow}
                  setIconUIShow={setIconUIShow}
                  setShowScanningUI={setShowScanningUI}
                  droppedTarget={droppedTarget}
                  setBtnBottomShow={setBtnBottomShow}
                  setModelShow={setModelShow}
                  />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

      <a-entity ref={target4} mindar-image-target='targetIndex: 4' id='plantUiLayer'>
        {targetFound === 4 &&
          <>
            { reflection ?
              <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
              :
              <a-entity>
                { modelShow ? <a-gltf-model id='pinkmaiden-model' class='clickable' src='#maidenpink' position='-0.2 -0.5 1' scale='0.4 0.4 0.4' mixin="rotateY"></a-gltf-model> : null }
                <a-plane id='pinkmaiden-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                  <ArIcons
                  data={plantData}
                  targetIndex="5"
                  iconUIShow={iconUIShow}
                  setIconUIShow={setIconUIShow}
                  setShowScanningUI={setShowScanningUI}
                  droppedTarget={droppedTarget}
                  setBtnBottomShow={setBtnBottomShow}
                  setModelShow={setModelShow}
                  />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

      <a-entity ref={target5} mindar-image-target='targetIndex: 5' id='plantUiLayer'>
        {targetFound === 5 &&
          <>
            { reflection ?
              <ReflectionPanel reflectionText={reflectionQuestions[randomIndex]} removeReflection={removeReflection}/>
              :
              <a-entity>
                { modelShow? <a-gltf-model id='campanula-model' class='clickable' src='#campanula' position='-0.2 -0.5 1' scale='0.3 0.3 0.3' mixin="rotateY"></a-gltf-model> : null }
                <a-plane id='campanula-plane' class='clickable' position='-0.2 0 1.3' height="2" scale='0.5 0.5 0.5' rotation='0 0 0' visible="false"></a-plane>
                  <ArIcons
                  data={plantData}
                  targetIndex="6"
                  iconUIShow={iconUIShow}
                  setIconUIShow={setIconUIShow}
                  setShowScanningUI={setShowScanningUI}
                  droppedTarget={droppedTarget}
                  setBtnBottomShow={setBtnBottomShow}
                  setModelShow={setModelShow}
                  />
              </a-entity>
            }
            { (showGesture && iconUIShow) ? <TapGesture showGesture={showGesture} setShowGesture={setShowGesture} /> : null}
          </>
        }
      </a-entity>

    </a-scene>
  );
}

export default ArScene;