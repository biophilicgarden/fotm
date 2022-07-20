import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function AppInfo({ setMainPanel }) {

    return (
        <div className="main-panel app-info-container">
            <div className="main-panel-content fade">
                <span className="main-panel-title">Using this App</span>
                <div className="main-panel-text">
                    <p>There are six focal plants dotted around the installation you can interact with via this Augmented Reality app.</p>
                    <p>To trigger an interaction, point your device at the image displayed near the plant.</p>
                    <p>An array of 5 icons will be displayed as long as the image is within view of the camera. These represent the 5 Pathways to Nature Connectedness.</p>
                    <p>Tap these icons to display content related to the plant and the chosen pathway.</p>
                    <p>Tap the 3D plant model to reflect on your relationship with nature.</p>

                    {/* These breaks allows page to be fully scrolled up without faffing around with CSS */}
                    <br></br>   
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>

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
    );
}