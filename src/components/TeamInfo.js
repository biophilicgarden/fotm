import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function TeamInfo({ setMainPanel }) {

    return (
        <div className="mainPanel TeamInfoContainer">
            <div className="mainPanelContent">      
                <span className="mainPanelTitle">Team Info</span>
                <div className="mainPanelText">
                <p>Ben Barrow - Developer - SURE student - Computer Science - University of Sheffield</p>
                <p>Chris Blackmore - Academic Lead - ScHARR - University of Sheffield</p>
                <p>Steve Maddock - SURE Supervisor - Computer Science - University of Sheffield</p>
                <p>Richard Nicolle - Creative Partner - Garden Up</p>
                <p>Miles Richardson - Univeristy of Derby</p>
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