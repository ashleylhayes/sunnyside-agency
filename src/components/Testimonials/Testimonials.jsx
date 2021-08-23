import React from 'react';
import './testimonials.scss';
import firstClient from '../../assets/images/clients/image-emily.jpg';
import secondClient from '../../assets/images/clients/image-thomas.jpg';
import thirdClient from '../../assets/images/clients/image-jennie.jpg'

function Testimonials() {
    return (
        <section className='testimonials' id='testimonials'>
            <h4 className='testimonials__title'>
                CLIENT TESTIMONIALS
            </h4>
            <div className='testimonials__testimonial'>
                <img className='testimonials__testimonial-image' src={firstClient} alt='woman with long blonde hair turned away from camera, stonr background' />
                <p className='testimonials__testimonial-quote'>
                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>
                <p className='testimonials__testimonial-name'>
                    Emily R.
                </p>
                <p className='testimonials__testimonial-position'>
                    Marketing Director
                </p>
            </div>
            <div className='testimonials__testimonial'>
                <img className='testimonials__testimonial-image' src={secondClient} alt='man with short black hair smiling at camera, grey background' />
                <p className='testimonials__testimonial-quote'>
                    Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                </p>
                <p className='testimonials__testimonial-name'>
                    Thomas S.
                </p>
                <p className='testimonials__testimonial-position'>
                    Chief Operating Officer
                </p>
            </div>
            <div className='testimonials__testimonial'>
                <img className='testimonials__testimonial-image' src={thirdClient} alt='woman with brown hair smiling at camera, beach in background' />
                <p className='testimonials__testimonial-quote'>
                    Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <p className='testimonials__testimonial-name'>
                    Jennie F.
                </p>
                <p className='testimonials__testimonial-position'>
                    Business Owner
                </p>
            </div>
        </section>
    );
}

export default Testimonials;