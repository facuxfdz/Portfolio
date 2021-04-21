import React, {Fragment, useEffect, useState} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Projects from './Projects';


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna malesuada, bibendum lectus vel, iaculis lorem. Proin efficitur sagittis tempor. Cras rutrum condimentum nibh, sed pharetra ligula posuere eget. Aenean molestie volutpat odio eget euismod. Aenean vitae augue ut est scelerisque aliquam eu id est. Sed tortor tellus, tempor id ornare et, volutpat a magna. Etiam volutpat ornare quam, sit amet tempor enim posuere sit amet. Donec finibus rhoncus eleifend. Integer et purus eget orci iaculis volutpat eget nec erat. Integer rutrum magna eget egestas ultrices. Cras leo odio, scelerisque in odio eget, sodales dapibus purus. Fusce non diam eget lectus sollicitudin iaculis bibendum sit amet odio. Proin varius velit a dui porta, non porta ex imperdiet. Nam cursus ornare ante, id molestie nulla.";

const Home = () => {
    
    // This data will come from some page, the idea is that this information could be updated dynamically
    
    const [aboutData,handleAboutData] = useState({});
    const [projectsData,handleProjectsData] = useState({});

    const bringAboutData = () => {
        let className = "about";
        let title = "About me";
        let description = loremIpsum;
        return {className,title,description};
    };

    const bringProjectsData = () => {
        let className = "projects gradient";
        let title = "Projects";
        let description = "These are my personal projects";
        let projects = [
            "https://github.com/facuxfdz/redux-CRUD",
            "https://github.facuxfdzPet-Lost-Server",
            "https://github.com/facuxfdz/MERN-Tasks-Client",
            "https://github.com/facuxfdz/MERN-Tasks-Client",
            "https://github.com/facuxfdz/MERN-Tasks-Client",
            "https://github.com/facuxfdz/MERN-Tasks-Client",
        ]; 
        return {className,title,description,projects};
    };

    useEffect(() => {
        handleAboutData(bringAboutData());
        handleProjectsData(bringProjectsData());

    }, []);

    


    return (
        <Fragment>
            <NavBar />
            <Header />
            <About aboutData={aboutData}/>
            <Projects projectsData={projectsData}/>
        </Fragment>
    );
}
 
export default Home;