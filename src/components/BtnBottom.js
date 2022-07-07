import React from 'react';

export default function BtnBottom({icon_type, svg, text, setMainPanel}) {

    // set state for main panel display
    function renderMainPanel(icon_type) {
        switch(icon_type) {
            case "info_btn":
                setMainPanel(1);
                break;
            case "leaf_btn":
                setMainPanel(2);
                break;
            case "people_btn":
                setMainPanel(3);
                break;
            default:
                setMainPanel(0)
        }
    }

    return (
            <button
                type='button'
                className='button btn_bottom_child'
                onClick={() => {renderMainPanel(icon_type)}}
            >
                <div className='btnSVG'>{ svg }</div>
            </button>
    );
}