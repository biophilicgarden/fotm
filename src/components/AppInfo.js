import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function AppInfo({ setMainPanel }) {

    return (
        <div className="main-panel app-info-container">
            <div className="main-panel-content">
                <span className="main-panel-title">Using this App</span>
                
                <div className="main-panel-text fade">
                    <p>There are six focal plants dotted around the installation you can interact with via this Augmented Reality app.</p>
                    <p>To trigger an interaction, point your device at the image displayed near the plant.</p>
                    <p>An array of 5 icons will be displayed as long as the image is within view of the camera. These represent the 5 Pathways to Nature Connectedness.</p>
                    <p>Click on these icons to display content related to the plant and the chosen pathway.</p>
                    <p>From here, click the button at the bottom of the panel and you will be receive a prompt enabling you to reflect on a certain aspect of your relationship with nature.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum efficitur tellus. Cras pretium lobortis risus, vitae lobortis lectus rhoncus quis. Aliquam erat volutpat. Morbi fermentum lectus lacus, nec lobortis sapien consectetur sit amet. Curabitur purus nisi, vestibulum ut tellus non, gravida maximus erat. Nunc ante odio, aliquam sed diam eget, fermentum tincidunt ligula. Pellentesque et nunc ex. Curabitur non eros vitae enim hendrerit faucibus quis vitae ante. Duis id lorem interdum, elementum sem eu, volutpat nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit eu mi eu fringilla.</p>
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