import React, { useState, useEffect } from 'react'
import PassedSubjectData from './PassedSubjectData';
import PassedSubject from './PassedSubject';
import InProgressSubject from './InProgressSubject';
import InProgressSubjectData from './InProgressSubjectData';
import axios from 'axios';

const Formation = () => {

    const [formationInfo,handleInfo] = useState('');
    
    useEffect(() => {
        callAPI();
    },[]);

    const callAPI = async () => {
        const res = await axios.get(process.env.REACT_APP_BACKEND_OWNER_URL);
        handleInfo(res.data.ownerInfo.formationInfo);
    }


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
    if(Object.keys(formationInfo).length === 0) return null;
    
    return (
        <section title="formation" className='formation my-5'>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <h1>Formation</h1>
                        <p>{formationInfo.universityData.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Passed subjects</h2>
                        <ul>
                            {formationInfo.passedSubjects.map(passedSubject => (
                                <PassedSubject 
                                    passedSubject={passedSubject}
                                    handlePassedSubjectsClick={handlePassedSubjectsClick} 
                                    key={passedSubject._id}
                                />
                            ))}
                        </ul>

                        <h2>In progress subjects</h2>
                        <ul>
                            {formationInfo.inProgressSubjects.map(inProgressSubject => (
                                <InProgressSubject 
                                    inProgressSubject={inProgressSubject}
                                    handleInProgressSubjectsClick={handleInProgressSubjectsClick}
                                    key={inProgressSubject._id}
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