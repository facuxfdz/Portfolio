import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    anmationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        x: 0,
        y: [0, -30],
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.2,
                ease: 'easeOut'
            }
        }  
    }
}
const Loader = () => {

    const [animation, cycleAnimation] = useCycle("anmationOne", "animationTwo");
    return (
   
        <div className="box">
                   
            <motion.div 
                className="loader"
                variants={loaderVariants}
                animate={animation}
            >

            </motion.div>
            <p className="loading-text" onClick={() => cycleAnimation()}>Loading...</p>           
        </div>
      
    );
}
 
export default Loader;