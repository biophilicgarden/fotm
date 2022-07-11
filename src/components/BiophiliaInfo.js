import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function BiophiliaInfo({ setMainPanel }) {

    return (
        <div className="mainPanel BiophiliaInfoContainer">
            <div className="mainPanelContent">
                <span className="mainPanelTitle">Biophilia</span>
                <div className="mainPanelText">
                    <p>Biophilia ('Bio' = living beings, 'philia' = Love for) is an ancient phenomenon going back to our time as Hunter-Gatherers, but only recently defined by Harvard biologist E. O. Wilson, as an 'Innate and genetically determined affinity of human beings with the natural world' (1984).</p>
                    <p>The 'Biophilic Garden' is an installation in a public space which demonstrates these principles and enables visitors to reflect on their own relationship to the natural world, via 5 pathways to nature connection - senses, beauty, emotion, meaning and compassion.</p>
                    <p>The installation contains two areas representing a 'Woodland' and 'Mountain' archetype, containing plants typically associated with those habitats. These include tactile and fragrant plants that humans have adopted for sensory, medicinal or spiritual purposes. The planting is augmented through use of QR codes and image markers which visitors can use to trigger additional information via their own mobile phones.</p>
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