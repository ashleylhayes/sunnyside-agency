import React from 'react';
import './body.scss';
import About from '../About/About';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Gallery from '../Gallery/Gallery';

function Body() {
    return (
        <section className='body'>
            <About />
            <Services />
            <Testimonials />
            <Gallery />
        </section>
    );
}

export default Body;