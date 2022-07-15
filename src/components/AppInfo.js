import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function AppInfo({ setMainPanel }) {

    return (
        <div className="mainPanel AppInfoContainer">
            <div className="mainPanelContent">
                <span className="mainPanelTitle">The Biophilic Garden</span>
                
                <div className="mainPanelText">
                    <p>There are six focal plants dotted around the installation you can interact with via this Augmented Reality app.</p>
                    <p>To trigger the interaction, point your device at the image displayed next to the plant.</p>
                    <p>An array of 5 icons will be displayed as long as the image is within view of the camera. These represent the 5 Pathways to Nature Connectedness.</p>
                    <p>By clicking on these icons you can display content related to the plant and the chosen pathway.</p>
                    <p>From here, click the button at the bottom of the panel and you will be receive a prompt enabling you to reflect on a certain aspect of your relationship with nature.</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>

                <div className="center-child">
                    <div className='btn-bottom-container main-panel-back-btn'>
                    <BtnBottom 
                        key={'back_btn'}
                        icon_type={'back_btn'}
                        svg={<BackIcon />}
                        text={'BACK'}
                        setMainPanel={setMainPanel}
                    />
                    </div> 
                </div>
            </div>
        </div>
    );
}