import React, { useState } from 'react'
import PassedSubjectData from './PassedSubjectData';
import PassedSubject from './PassedSubject';

const Formation = ({formationData}) => {

    const [showPassedSubjectData,handleShowPassedSubjectData] = useState(false);
    const [selectedSubject,handleSelectedSubject] = useState({});

    const handlePassedSubjectsClick = passedSubject => {
        handleShowPassedSubjectData(true);
        handleSelectedSubject(passedSubject);
    }
    
    if(Object.keys(formationData).length === 0) return null;
    
    return (
        <section className={`${formationData.className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>{formationData.title}</h1>
                        <p>
                            {formationData.universityData.name}
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Passed subjects</h2>
                        <ul>
                            {formationData.passedSubjects.map(passedSubject => (
                                <PassedSubject 
                                    passedSubject={passedSubject}
                                    handlePassedSubjectsClick={handlePassedSubjectsClick} 
                                    key={passedSubject.index}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                                {showPassedSubjectData 
                                    ? (
                                        <PassedSubjectData selectedSubject={selectedSubject} />
                                    ) 
                                    : null
                                }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Formation;