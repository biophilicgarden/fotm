import { React } from 'react';
import logo from '../assets/TUOS_PRIMARY_LOGO_REVERSED.png';

export default function ScanningUI(props) {
    return(
        <div id='scanning-ui' className=''>
            <div className='inner'>
                <img src={logo} alt='UoS Logo'/>
                <div className='scanline'></div>
            </div>
        </div>
    );
}
