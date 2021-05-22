import React, {Fragment, useEffect, useState} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Formation from './Formation';
import Footer from './Footer';
import ScrollTop from './ScrollTop';


const Home = () => {
    
    return (
        <Fragment>
            <NavBar />
            <Header/>
            <About/>
            <Formation/>
            <Projects />
            <Footer />
            <ScrollTop />
        </Fragment>
    );
}
 
export default Home;