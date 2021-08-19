import React from 'react';
import './about.scss';

function About() {
    return (
        <section className='about'>
            <div className='about__image' role='img' aria-label='white egg against a yellow background'></div>
            <div className='about__benefits'>
                <h2 className='about__benefits-title'>
                    Transform your brand
                </h2>
                <p className='about__benefits-blurb'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <div className='about__benefits-learn-container'>
                    <p className='about__benefits-learn'>
                        LEARN MORE
                    </p>
                    <div className='about__benefits-learn-line'>
                    </div>
                </div>
            </div>
            <div className='about__image' role='img' aria-label='red chalice cup against a red background'></div>
            <div className='about__benefits'>
                <h2 className='about__benefits-title'>
                    Stand out to the right audience
                </h2>
                <p className='about__benefits-blurb'>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
                </p>
                <div className='about__benefits-learn-container'>
                    <p className='about__benefits-learn'>
                        LEARN MORE
                    </p>
                    <div className='about__benefits-learn-line--alt'>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;