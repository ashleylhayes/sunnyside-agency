import React from 'react';
import './gallery.scss';

function Gallery() {
    return (
        <section className='gallery'>
            <div className='gallery__image' role='img' aria-label='white milk bottles with red lids, blue background with white clouds'></div>
            <div className='gallery__image' role='img' aria-label='orange slice on a white plate with blue border, orange background'></div>
            <div className='gallery__image' role='img' aria-label='waffle ice cream cone, blue background'></div>
            <div className='gallery__image' role='img' aria-label='white sugar cubes stacked aginst a pink background'></div>
        </section>
    );
}

export default Gallery;