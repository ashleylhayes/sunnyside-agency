import React from 'react';
import './body.scss';
import eggImage from '../../assets/images/mobile/image-transform.jpg';

function Body() {
    return (
        <div className='body'>
            <img className='body__image' src={eggImage} />
        </div>
    );
}

export default Body;