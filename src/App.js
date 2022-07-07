import { React, useEffect, useState, useCallback } from 'react';
import { usePapaParse } from 'react-papaparse';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/src/image-target/aframe.js';
import './style/App.css';
import Data from './assets/plant_data.csv';

// components
import ArScene from './components/ArScene';
import BtnBottom from './components/BtnBottom';
import ScanningUI from './components/ScanningUI';
import AppInfo from './components/AppInfo';
import BiophiliaInfo from './components/BiophiliaInfo';
import TeamInfo from './components/TeamInfo';

// icons
import { ReactComponent as InfoIcon } from './assets/icons/circle-info-solid.svg';
import { ReactComponent as PeopleIcon } from './assets/icons/people-group-solid.svg';
import { ReactComponent as LeafIcon } from './assets/icons/leaf-solid.svg';

// button icons
const ICONS = [
  { id: 'info_btn', svg: <InfoIcon />, text: 'INFO' },
  { id: 'leaf_btn', svg: <LeafIcon />, text: 'LEAF' },
  { id: 'people_btn', svg: <PeopleIcon />, text: 'PEOPLE' }
];

function App() {
  const [plantData, setPlantData] = useState();
  const [scanningUIShow, setScanningUIShow] = useState(true);
  const [mainPanel, setMainPanel] = useState(0);
  const [btnBottomShow, setBtnBottomShow] = useState(true);

  // parse the csv file
  const { readRemoteFile } = usePapaParse();
  useEffect(() => {
    const handleReadRemoteFile = () => {
      readRemoteFile(`${Data}`, {
      newline: '\n',
      delimiter: ';',
      complete: (results) => { setPlantData(results.data); }
      });
    };
    handleReadRemoteFile();
    // eslint-disable-next-line
  }, []); // empty dependency list means callback executes just the once

  const removeMainPanel = useCallback(() => {
    setMainPanel(0);
  }, []);

  return (
    <div>
      <div id='mainApp' className='App'>
      {
      mainPanel === 1 ? <AppInfo setMainPanel={setMainPanel}/>
      :
      mainPanel === 2 ? <BiophiliaInfo setMainPanel={setMainPanel}/>
      :
      mainPanel === 3 ? <TeamInfo setMainPanel={setMainPanel}/>
      :
      <div></div>}
        {/* setup the AR scene */}
        <div className='scene_container'>
          
          <ArScene
            data={plantData}
            setShowScanningUI={setScanningUIShow}
            removeMainPanel={removeMainPanel}
            setBtnBottomShow={setBtnBottomShow}
          />
          
          {scanningUIShow && <ScanningUI />}
        </div>

        {/* button UI for bottom of screen - if one of the main panels is showing, don't render btns */}
        { mainPanel === 0 && btnBottomShow ? 
        <div className="center-child">
          <div className='btn_bottom_container'>
            {ICONS.map(icon => (
              <BtnBottom 
                key={icon.id}
                icon_type={icon.id}
                svg={icon.svg}
                text={icon.text}
                setMainPanel={setMainPanel}
              />
            ))}
          </div>
        </div>
        : <div></div>
        }
      </div>
    </div>
  );
}

export default App;
