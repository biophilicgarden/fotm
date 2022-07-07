import { React } from 'react';

export default function InfoPanel({removePanel, data, targetIndex, col, icon}) {

    return (
        <div id="info-panel-container">
            <div className="info-panel">
                <div className="info-content">
                    <div className="info-title-container">

                        <div className="info-icon-container">
                            <div className="info-panel-icon">{icon}</div>
                        </div>

                        <div className="info-title-text-container">
                            <div className="info-title">{data[targetIndex][0]}</div>
                            <div className="latin-name">{data[targetIndex][1]}</div>
                        </div>
                        
                    </div>
                    <p className="info-text">{data[targetIndex][col]}</p>
                </div>
                <button id="reflectionBtn" onClick={removePanel}><span>Reflect</span></button>
            </div>
        </div> 
    );
}