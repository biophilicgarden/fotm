/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import ArIcons from './ArIcons';

// 3D models
import HeartModel from '../assets/models/heart_turq.glb'
import EyeModel from '../assets/models/eye_turq.glb'
import SmileModel from '../assets/models/face_turq.glb'
import ThumbsModel from '../assets/models/thumbs_turq.glb'
import HandModel from '../assets/models/hand_turq.glb'

// compiled target file
const target = 'targets-final.mind';

function ArScene({ data, setShowScanningUI, removeMainPanel, setBtnBottomShow }) {
  const sceneRef = useRef(null);
  const target0 = useRef(null);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const target3 = useRef(null);
  const target4 = useRef(null);
  const target5 = useRef(null);

  const [plantData, setPlantData] = useState([]);
  const [targetFound, setTargetFound] = useState(-1);
  const [droppedTarget, setDroppedTarget] = useState(false)
  const [iconUIShow, setIconUIShow] = useState(true);

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
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl0.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
  }

    const targetEl1 = target1.current;
    if (targetEl1) {
      targetEl1.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl1.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
    }

    const targetEl2 = target2.current;
    if (targetEl2) {
      targetEl2.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl2.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
    }

    const targetEl3 = target3.current;
    if (targetEl3) {
      targetEl3.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl3.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
    } 

    const targetEl4 = target4.current;
    if (targetEl4) {
      targetEl4.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl4.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
    } 

    const targetEl5 = target5.current;
    if (targetEl5) {
      targetEl5.addEventListener('targetFound', (event) => {
        setTargetFound(event.detail.foundTarget);
        setShowScanningUI(false);
        setBtnBottomShow(false);
        setDroppedTarget(false);
        removeMainPanel();
      });
      targetEl5.addEventListener('targetLost', (event) => {
        iconUIShow ? setShowScanningUI(true) : setShowScanningUI(false);
        iconUIShow ? setBtnBottomShow(true) : setBtnBottomShow(false);
        setDroppedTarget(true);
      });
    } 

  }, [setShowScanningUI, targetFound, iconUIShow, removeMainPanel, setBtnBottomShow]);

  useEffect(() => {
    if (data !== null) {
      setPlantData(data);
    }
  }, [data]);

  // [DEBUG]
  // useEffect(() => {
  //   console.log(`target found ${targetFound}`);
  // }, [targetFound]);

  return (
    // make the ar-scene with our target and some other attributes
    <a-scene ref={sceneRef}
      mindar-image={
      `imageTargetSrc: ${window.location.origin}${window.location.pathname}/${target};
      autoStart: false;
      uiLoading: no;
      uiError: no;
      uiScanning: no;
      missTolerance: 5;
      filterMinCF:0.0001;
      filterBeta: 1000`
      }
      color-space='sRGB'
      renderer='colorManagement: true, physicallyCorrectLights'
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
      </a-assets>

      {/* add camera with raycaster looking for clickable targets */}
      <a-camera
        id='camera'
        position='0 0 0'
        look-controls='enabled: false'
        cursor='fuse: false; rayOrigin: mouse;'
        // eslint-disable-next-line no-template-curly-in-string
        raycaster='far: ${customFields.libVersion}; objects: .clickable'>
      </a-camera> 
      
      <a-entity ref={target0} mindar-image-target='targetIndex: 0' id='plantUiLayer'>
        {targetFound === 0 &&
          <ArIcons
          data={plantData}
          targetIndex="1"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

      <a-entity ref={target1} mindar-image-target='targetIndex: 1' id='plantUiLayer'>
        {targetFound === 1 &&  
          <ArIcons
          data={plantData}
          targetIndex="2"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

      <a-entity ref={target2} mindar-image-target='targetIndex: 2' id='plantUiLayer'>
        {targetFound === 2 &&  
          <ArIcons
          data={plantData}
          targetIndex="3"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

      <a-entity ref={target3} mindar-image-target='targetIndex: 3' id='plantUiLayer'>
        {targetFound === 3 &&  
          <ArIcons
          data={plantData}
          targetIndex="4"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

      <a-entity ref={target4} mindar-image-target='targetIndex: 4' id='plantUiLayer'>
        {targetFound === 4 &&  
          <ArIcons
          data={plantData}
          targetIndex="5"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

      <a-entity ref={target5} mindar-image-target='targetIndex: 5' id='plantUiLayer'>
        {targetFound === 5 &&  
          <ArIcons
          data={plantData}
          targetIndex="6"
          iconUIShow={iconUIShow}
          setIconUIShow={setIconUIShow}
          setShowScanningUI={setShowScanningUI}
          droppedTarget={droppedTarget}
          setBtnBottomShow={setBtnBottomShow}
          />
        }
      </a-entity>

    </a-scene>
  );
}

export default ArScene;