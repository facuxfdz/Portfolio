import React from 'react'

const About = ({aboutData}) => {
    return ( 
        <section className={`${aboutData.className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>{aboutData.title}</h1>
                        <p className="mt-5">
                            {aboutData.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;