import React from 'react'

const InProgressSubject = ({inProgressSubject,handleInProgressSubjectsClick}) => {

    
    return (
        <li className="non-promoted-subject">
            <a 
                className="link-current-data" 
                href="#!"
                onClick={() => handleInProgressSubjectsClick(inProgressSubject)}    
            >
                {inProgressSubject.name}
            </a>
        </li>
    );
}
 
export default InProgressSubject;