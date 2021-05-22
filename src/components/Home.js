import React, {Fragment, useEffect, useState} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Formation from './Formation';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna malesuada, bibendum lectus vel, iaculis lorem. Proin efficitur sagittis tempor. Cras rutrum condimentum nibh, sed pharetra ligula posuere eget. Aenean molestie volutpat odio eget euismod. Aenean vitae augue ut est scelerisque aliquam eu id est. Sed tortor tellus, tempor id ornare et, volutpat a magna. Etiam volutpat ornare quam, sit amet tempor enim posuere sit amet. Donec finibus rhoncus eleifend. Integer et purus eget orci iaculis volutpat eget nec erat. Integer rutrum magna eget egestas ultrices. Cras leo odio, scelerisque in odio eget, sodales dapibus purus. Fusce non diam eget lectus sollicitudin iaculis bibendum sit amet odio. Proin varius velit a dui porta, non porta ex imperdiet. Nam cursus ornare ante, id molestie nulla.";

const Home = () => {
    
    
    
    // This data will come from some page, the idea is that this information could be updated dynamically
    
    const [aboutData,handleAboutData] = useState({});
    const [formationData,handleFormation] = useState({});
    
    useEffect(() => {
        handleFormation(bringFormationData());
        handleAboutData(bringAboutData());

    },[]);


    
    const bringAboutData = () => {
        let className = "about gradient";
        let title = "About me";
        let description = loremIpsum;
        return {className,title,description};
    };


    const bringFormationData = () => {
        let className = "formation";
        let title = "Formation";
        let universityData = {"name": "UTN - Universidad Tecnológica Nacional"};
        let passedSubjects = [
            {
                "name": "Quimica",
                "passedYear": 2018,
                "grade": 9,
                "promoted": true,
                "finalExam": true,
                "index": 1
            },
            {
                "name": "Analisis Matemático 1",
                "passedYear": 2018,
                "grade": 6,
                "promoted": false,
                "finalExam": true,
                "index": 2     
            },
            {
                "name": "Algoritmos y Estructura de Datos",
                "passedYear": 2020,
                "grade": 9,
                "promoted": true,
                "finalExam": true,
                "index": 3     
            },
            {
                "name": "Ingeniería y Sociedad",
                "passedYear": 2020,
                "grade": 9,
                "promoted": true,
                "finalExam": true,
                "index": 4     
            },
            {
                "name": "Álgebra y Geometría Analítica",
                "passedYear": 2020,
                "grade": 9,
                "promoted": true,
                "finalExam": true,
                "index": 5     
            },
            {
                "name": "Sistemas y Organizaciones",
                "passedYear": 2020,
                "grade": 10,
                "promoted": true,
                "finalExam": true,
                "index": 6     
            },
            {
                "name": "Física 1",
                "passedYear": 2020,
                "grade": 6,
                "promoted": false,
                "finalExam": false,
                "index": 7     
            },
            {
                "name": "Matemática Discreta",
                "passedYear": 2020,
                "grade": 7,
                "promoted": false,
                "finalExam": false,
                "index": 8     
            }
        ]; 
        let inProgressSubjects = [
            {
                "name": "Arquitectura de computadores",
                "day": "Monday",
                "from": "19:00 hs",
                "to": "22:00 hs",
                "index": 1
            },
            {
                "name": "Análisis de Sistemas",
                "day": "Tuesday",
                "from": "08:00 hs",
                "to": "11:00 hs",
                "index": 2     
            },
            {
                "name": "Sintaxis y Semántica de los Lenguajes",
                "day": "Tuesday",
                "from": "13:30 hs",
                "to": "16:30 hs",
                "index": 3
            },
            {
                "name": "Análisis Matemático 2",
                "day": "Wednesday-Friday",
                "from": "19:00 hs",
                "to": "21:30 hs",
                "index": 4
            },
            {
                "name": "Paradigmas de Programación",
                "day": "Thursday",
                "from": "08:00 hs",
                "to": "12:30 hs",
                "index": 5
            },
            {
                "name": "Probabilidad y Estadística",
                "day": "Thursday",
                "from": "19:00 hs",
                "to": "21:30 hs",
                "index": 6
            }
        ];

        return {className,title,universityData,passedSubjects,inProgressSubjects};
    }

    // useEffect(() => {
    //     handleAboutData(bringAboutData());
    //     handleProjectsData(bringProjectsData());
    //     handleFormation(bringFormationData());

    // }, []);



    


    return (
        <Fragment>
            <NavBar />
            <Header/>
            <About aboutData={aboutData}/>
            <Formation formationData={formationData}/>
            <Projects />
            <Footer />
            <ScrollTop />
        </Fragment>
    );
}
 
export default Home;