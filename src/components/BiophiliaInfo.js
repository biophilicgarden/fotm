import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function BiophiliaInfo({ setMainPanel }) {

    return (
        <div className="mainPanel BiophiliaInfoContainer">
            <div className="mainPanelContent">
                <span className="mainPanelTitle">Biophilia</span>
                <div className="mainPanelText">
                    <p className="quote">An innate and genetically determined affinity of human beings with the natural world.<br></br>-- Edward O Wilson</p>
                    <p>Whatever our relationship with
                    nature is, we can get closer.
                    We can notice more, listen more,
                    feel more, enjoy more, and care more.</p>

                    <p>The 'Biophilic Garden' is an installation which enables
                    visitors to reflect on their own relationship to the natural world, and asks what nourishes
                    them and allows them to thrive in the physical, social, psychological and spiritual dimensions
                    of their lives.</p>
                    
                    <p>Some more text.</p>
                    <p>Some more text.</p>
                    <p>Some more text.</p>
                    <p>That's enough text now.</p>
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