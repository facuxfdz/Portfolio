import React from 'react'

const Projects = ({projectsData}) => {
    
    const {projects} = projectsData;

    if(!projects) return null;

    return ( 
       
            <section className={`${projectsData.className}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,74.7C672,53,768,75,864,112C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center my-2">
                            <img className="align-middle" src="GitHub-Mark-Light-64px.png" />
                            <h3 className="p-3 d-inline-block align-middle">My github profile</h3>
                        </div>

                        <div className="col-md-6 my-2">
                            <h1 className="my-3">{projectsData.title}</h1>
                            <p className="my-4">
                                {projectsData.description}
                            </p>
                    
                            <ul>
                                {projects.map(project => {
                                    return ( 
                                        <li key={project.index} className="my-4"> 
                                            <a href="#!" className="link-success-violet-background"> 
                                                <img className="mx-3 my-2" src="GitHub-Mark-64px.png" />
                                                {project.url} 
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul> 
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"><p>hola</p></path>
                </svg>

            </section>


    );
}
 
export default Projects;