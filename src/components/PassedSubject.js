import React, { useEffect, useState } from 'react'

const PassedSubject = ({passedSubject,handlePassedSubjectsClick}) => {

    const [passedOrNotClassName, handleClassName] = useState('');
    const [listIcon, handleListIcon] = useState('');
    useEffect(() => {
        if(passedSubject.promoted || passedSubject.finalExam){
            handleClassName('link-success');
            handleListIcon('promoted-subject');
        }else{
            handleClassName('link-secondary');
            handleListIcon('non-promoted-subject');
        }
        
    }, []);


    return ( 
        <li className={`${listIcon}`}> 
            <a href="#!" className={`${passedOrNotClassName}`} onClick={() => handlePassedSubjectsClick(passedSubject)}>
                {passedSubject.name}
            </a> 
            
        </li>
    );
}
 
export default PassedSubject;