import React from 'react'

const About = ({aboutData}) => {
    return ( 
        <section title="about" className={`${aboutData.className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1 className="text-white">{aboutData.title}</h1>
                        <p className="mt-5 text-white">
                            {aboutData.description}
                        </p>
                    </div>
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#fff" fillOpacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </section>
    );
}
 
export default About;