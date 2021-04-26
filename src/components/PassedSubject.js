import React from 'react'

const PassedSubject = ({passedSubject,handlePassedSubjectsClick}) => {
    return ( 
        <li> 
            <a href="#!" onClick={() => handlePassedSubjectsClick(passedSubject)}>
                {passedSubject.name}
            </a> 
            
        </li>
    );
}
 
export default PassedSubject;