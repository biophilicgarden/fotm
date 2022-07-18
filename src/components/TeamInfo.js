import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function TeamInfo({ setMainPanel }) {

    return (
        <div className="main-panel team-info-container">
            <div className="main-panel-content fade">      
                <span className="main-panel-title">Team</span>
                
                <div className="main-panel-text fade">
                    <div className="team-member">
                        <h1>Benedict Barrow - Software Developer</h1>
                        <p>Computer Science, University of Sheffield</p>
                    </div>

                    <div className="team-member">
                        <h1>Chris Blackmore - Academic Lead</h1>
                        <p>ScHARR, University of Sheffield</p>
                    </div>

                    <div className="team-member">
                        <h1>Steve Maddock - SURE Supervisor</h1>
                        <p>Computer Science, University of Sheffield</p>
                    </div>

                    <div className="team-member">
                        <h1>Richard Nicolle - Creative Partner</h1>
                        <p>Garden Up</p>
                    </div>


                    <div className="team-member">
                        <h1>Andrew Hall - 3D Artist</h1>
                    </div>

                    <div className="team-member">
                        <h1>Miles Richardson - Consultant</h1>
                        <p>School of Psychology, University of Derby</p>
                    </div>

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