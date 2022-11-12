import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg w-1/2 shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;