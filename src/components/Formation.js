import React, { useState } from 'react'
import PassedSubjectData from './PassedSubjectData';
import PassedSubject from './PassedSubject';
import InProgressSubject from './InProgressSubject';
import InProgressSubjectData from './InProgressSubjectData';

const Formation = ({formationData}) => {

    const [showPassedSubjectData,handleShowPassedSubjectData] = useState(false);
    const [selectedSubject,handleSelectedSubject] = useState({});
    const [showInProgressSubjectData,handleShowInProgressSubjectData] = useState(false);

    
    const handlePassedSubjectsClick = passedSubject => {
        handleShowInProgressSubjectData(false);
        handleShowPassedSubjectData(true);
        handleSelectedSubject(passedSubject);
    }
    
    const handleInProgressSubjectsClick = inProgressSubject => {
        handleShowPassedSubjectData(false);
        handleShowInProgressSubjectData(true);
        handleSelectedSubject(inProgressSubject);

    }
    if(Object.keys(formationData).length === 0) return null;
    
    return (
        <section className={`${formationData.className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
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

                        <h2>Non-Passed subjects</h2>
                        <ul>
                            {formationData.inProgressSubjects.map(inProgressSubject => (
                                <InProgressSubject 
                                    inProgressSubject={inProgressSubject}
                                    handleInProgressSubjectsClick={handleInProgressSubjectsClick}
                                    key={inProgressSubject.index}
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
                                {showInProgressSubjectData
                                    ? (
                                        <InProgressSubjectData 
                                            selectedSubject={selectedSubject}
                                        />
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