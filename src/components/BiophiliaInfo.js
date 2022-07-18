import React from 'react';
import BtnBottom from './BtnBottom';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-rotate-left-solid.svg';

export default function BiophiliaInfo({ setMainPanel }) {

    return (
        <div className="main-panel biophilia-info-container">
            <div className="main-panel-content fade">
                <span className="main-panel-title">Biophilia</span>
                <div className="main-panel-text fade">
                    <p>Biophilia ('Bio' = living beings, 'philia' = Love for) is an ancient phenomenon going back to our time as Hunter-Gatherers, but only recently defined by Harvard biologist E. O. Wilson, as an 'Innate and genetically determined affinity of human beings with the natural world' (1984).</p>
                    <p>The 'Biophilic Garden' is an installation in a public space which demonstrates these principles and enables visitors to reflect on their own relationship to the natural world, via 5 pathways to nature connection - senses, beauty, emotion, meaning and compassion.</p>
                    <p>The installation contains two areas representing a 'Woodland' and 'Mountain' archetype, containing plants typically associated with those habitats. These include tactile and fragrant plants that humans have adopted for sensory, medicinal or spiritual purposes. The planting is augmented through use of QR codes and image markers which visitors can use to trigger additional information via their own mobile phones.</p>
                    
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