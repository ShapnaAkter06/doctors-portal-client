import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <div className="hero bg-center bg-cover bg-no-repeat mt-12">
            <div className="hero-content flex-col lg:flex-row gap-10 justify-center items-center">
                <img src={treatment} className=" rounded-lg lg:w-2/5 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6 w-4/5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment