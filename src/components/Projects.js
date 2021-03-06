import React, { Fragment, useEffect,useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axiosClient from '../config/axios';

const Projects = () => {

    const [projectsData,handleProjectsData] = useState([]);

    const bringGitInfo = async () => {
        const projectsSelection = new Array("Portfolio","fizzbuzz-exercise","Presupuesto-con-React","Drinks-React-App-","Task-manager","Cryptocurrency","MERN-Tasks-Client","Tecnicas-de-combate","Pet-Lost-Server","BBDD");
        const repos = await axiosClient.get();
        const reposInfo = repos.data.filter(project => projectsSelection.includes(project.name));
        handleProjectsData(reposInfo);
    }
    
    useEffect(() => {
        bringGitInfo();
    },[]);
    
    if(!projectsData) return null;

    return ( 
       
            <section title="projects" className='projects gradient'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#fff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,74.7C672,53,768,75,864,112C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    
                <div className="container">
                    <div className="row align-items-center text-center">

                        <div className="col-md-12 my-2">
                            <h1 className="my-3">Projects</h1>
                            <p>
                                These are my personal projects
                            </p>
                            <Carousel fade prevLabel="" nextLabel="">
                            
                                {projectsData.map(project => {
                                    return (
                                      
                                        <Carousel.Item key={project.id}>
                                        <a href={`${project.html_url}`} target="_blank" className="link-success-violet-background"> 
                                        <img className="mx-3 my-2" src="GitHub-Mark-64px.png" />
                                        {project.name} 
                                        </a>
                                         {project.description 
                                            ? (<p className="my-2"> {project.description} </p>)
                                             : (<p className="my-2">No description added</p>)
                                        } 
                                        </Carousel.Item>  
                                        
                                    );
                                    })}

                            </Carousel>
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#000" fillOpacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,117.3C672,117,768,75,864,80C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

            </section>

    );
}
 
export default Projects;