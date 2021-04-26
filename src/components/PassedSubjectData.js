import React from 'react'

const PassedSubjectData = ({selectedSubject}) => {
    return ( 
        <p> {selectedSubject.name} </p>
    );
}
 
export default PassedSubjectData;