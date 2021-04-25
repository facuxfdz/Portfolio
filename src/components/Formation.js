import React from 'react'

const Formation = ({formationData}) => {
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
                        <ul>
                            {formationData.passedSubjects.map(passedSubject => (
                                <li> {passedSubject.name} </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {/* Put here a dynamic data depends on what subject is selected */}
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Formation;