import React, { useEffect, useState } from 'react'

const PassedSubject = ({passedSubject,handlePassedSubjectsClick}) => {

    const [passedOrNotClassName, handleClassName] = useState('');

    useEffect(() => {
        if(passedSubject.promoted || passedSubject.finalExam){
            handleClassName('link-success');
        }else{
            handleClassName('link-secondary');
        }
        
    }, []);


    return ( 
        <li className="passed-subjects"> 
            <a href="#!" className={`${passedOrNotClassName}`} onClick={() => handlePassedSubjectsClick(passedSubject)}>
                {passedSubject.name}
            </a> 
            
        </li>
    );
}
 
export default PassedSubject;