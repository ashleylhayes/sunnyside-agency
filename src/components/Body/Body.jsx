import React from 'react';
import './body.scss';
import eggImage from '../../assets/images/mobile/image-transform.jpg';
import cupImage from '../../assets/images/mobile/image-stand-out.jpg';
import firstClient from '../../assets/images/clients/image-emily.jpg';
import secondClient from '../../assets/images/clients/image-thomas.jpg';
import thirdClient from '../../assets/images/clients/image-jennie.jpg';

function Body() {
    return (
        <section className='body'>
            <img className='body__image' src={eggImage} />
            <div className='body__benefits'>
                <h2 className='body__benefits-title'>
                    Transform your brand
                </h2>
                <p className='body__benefits-blurb'>
                    We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <p className='body__benefits-learn'>
                    LEARN MORE
                </p>
            </div>
            <img className='body__image' src={cupImage} />
            <div className='body__benefits'>
                <h2 className='body__benefits-title'>
                    Stand out to the right audience
                </h2>
                <p className='body__benefits-blurb'>
                    Using a collaborative formula of designers, researchers, photograpgers, videographers, and copywriters, we'll build and extend your brand in digital places.
                </p>
                <p className='body__benefits-learn'>
                    LEARN MORE
                </p>
            </div>
            <div className='body__featured-service body__design'>
                <h3>
                    Graphic Design
                </h3>
                <p>
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                </p>
            </div>
            <div className='body__featured-service body__photography'>
                <h3>
                    Photography
                </h3>
                <p>
                    Increase your credibility by gettin the most stunning, high-quality photos that improve your business image.
                </p>
            </div>
            <div className='body__testimonials'>
                <h4>
                    CLIENT TESTIMONIALS
                </h4>
                <div className='body__testimonial'>
                    <img src={firstClient} />
                    <p>
                        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <p>
                        Emily R.
                    </p>
                    <p>
                        Marketing Director
                    </p>
                </div>
                <div className='body__testimonial'>
                    <img src={secondClient} />
                    <p>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                    </p>
                    <p>
                        Thomas S.
                    </p>
                    <p>
                        Chief Operating Officer
                    </p>
                </div>
                <div className='body__testimonial'>
                    <img src={thirdClient} />
                    <p>
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <p>
                        Jennie F.
                    </p>
                    <p>
                        Business Owner
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Body;