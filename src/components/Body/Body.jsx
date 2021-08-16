import React from 'react';
import './body.scss';
import eggImage from '../../assets/images/mobile/image-transform.jpg';
import cupImage from '../../assets/images/mobile/image-stand-out.jpg';
import firstClient from '../../assets/images/clients/image-emily.jpg';
import secondClient from '../../assets/images/clients/image-thomas.jpg';
import thirdClient from '../../assets/images/clients/image-jennie.jpg';
import firstGalleryImage from '../../assets/images/mobile/image-gallery-milkbottles.jpg';
import secondGalleryImage from '../../assets/images/mobile/image-gallery-orange.jpg';
import thirdGalleryImage from '../../assets/images/mobile/image-gallery-cone.jpg';
import fourthGalleryImage from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg';

function Body() {
    return (
        <section className='body'>
            <img className='body__image' src={eggImage} alt='white egg against a yellow background' />
            <div className='body__benefits'>
                <h2 className='body__benefits-title'>
                    Transform your brand
                </h2>
                <p className='body__benefits-blurb'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <div className='body__benefits-learn-container'>
                    <p className='body__benefits-learn'>
                        LEARN MORE
                    </p>
                    <div className='body__benefits-learn-line'>
                    </div>
                </div>
            </div>
            <img className='body__image' src={cupImage} alt='red chalice cup against a red background' />
            <div className='body__benefits'>
                <h2 className='body__benefits-title'>
                    Stand out to the right audience
                </h2>
                <p className='body__benefits-blurb'>
                    Using a collaborative formula of designers, researchers, photograpgers, videographers, and copywriters, we'll build and extend your brand in digital places.
                </p>
                <div className='body__benefits-learn-container'>
                    <p className='body__benefits-learn'>
                        LEARN MORE
                    </p>
                    <div className='body__benefits-learn-line--alt'>
                    </div>
                </div>
            </div>
            <div className='body__featured-service body__design'>
                <h3 className='body__featured-service-title'>
                    Graphic Design
                </h3>
                <p className='body__featured-service-blurb'>
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                </p>
            </div>
            <div className='body__featured-service body__photography'>
                <h3 className='body__featured-service-title'>
                    Photography
                </h3>
                <p className='body__featured-service-blurb'>
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
            <div className='body__testimonials'>
                <h4 className='body__testimonials-title'>
                    CLIENT TESTIMONIALS
                </h4>
                <div className='body__testimonial'>
                    <img className='body__testimonial-image' src={firstClient} alt='woman with long blonde hair turned away from camera, stonr background' />
                    <p className='body__testimonial-quote'>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <p className='body__testimonial-name'>
                        Emily R.
                    </p>
                    <p className='body__testimonial-position'>
                        Marketing Director
                    </p>
                </div>
                <div className='body__testimonial'>
                    <img className='body__testimonial-image' src={secondClient} alt='man with short black hair smiling at camera, grey background' />
                    <p className='body__testimonial-quote'>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                    </p>
                    <p className='body__testimonial-name'>
                        Thomas S.
                    </p>
                    <p className='body__testimonial-position'>
                        Chief Operating Officer
                    </p>
                </div>
                <div className='body__testimonial'>
                    <img className='body__testimonial-image' src={thirdClient} alt='woman with brown hair smiling at camera, beach in background' />
                    <p className='body__testimonial-quote'>
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <p className='body__testimonial-name'>
                        Jennie F.
                    </p>
                    <p className='body__testimonial-position'>
                        Business Owner
                    </p>
                </div>
            </div>
            <div className='body__gallery'>
                <img className='body__gallery-image' src={firstGalleryImage} alt='white milk bottles with red lids, blue background with white clouds' />
                <img className='body__gallery-image' src={secondGalleryImage} alt='orange slice on a white plate with blue border, orange background' />
                <img className='body__gallery-image' src={thirdGalleryImage} alt='waffle ice cream cone, blue background' />
                <img className='body__gallery-image' src={fourthGalleryImage} alt='white sugar cubes stacked aginst a pink background' />
            </div>
        </section>
    );
}

export default Body;