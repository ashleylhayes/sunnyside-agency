import React from 'react';
import './services.scss';

function Services() {
    return (
        <section className='services'>
            <div className='services__featured services__design'>
                <h3 className='services__featured-title'>
                    Graphic Design
                </h3>
                <p className='services__featured-blurb'>
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                </p>
            </div>
            <div className='services__featured services__photography'>
                <h3 className='services__featured-title'>
                    Photography
                </h3>
                <p className='services__featured-blurb'>
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
        </section>
    );
}

export default Services;