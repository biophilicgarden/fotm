import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function AppInfo({ setMainPanel }) {

    return (
        <div className="mainPanel AppInfoContainer">
            <div className="mainPanelContent">
                <span className="mainPanelTitle">Welcome to the Biophilic Garden!</span>
                <div className="mainPanelText">
                    <p>There are six focal plants dotted around the installation you can interact with via this Augmented Reality app.</p>
                    <p>To trigger the interaction, point your device at the image displayed next to the plant.</p>
                    <p>An array of icons will be displayed as long as the image is within view of the camera.</p>
                    <p>Click on these icons to display content related to the plant and the chosen pathway.</p>
                    <p>You can close this panel by clicking the button at the bottom and you will be prompted to reflect on a certain aspect of your relationship with nature.</p>
                </div>
                <div className="center-child">
                    <div className='btn_bottom_container main-panel-back-btn'>
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