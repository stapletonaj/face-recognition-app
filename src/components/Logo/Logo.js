import React from 'react';
import Tilt from "react-tilt";
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className=''>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 60 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '25px'}} alt='brain' src={brain} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;