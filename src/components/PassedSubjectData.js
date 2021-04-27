import React, { Fragment } from 'react'

const PassedSubjectData = ({selectedSubject}) => {
    return ( 
        <Fragment>
            <h3 className="text-center">{selectedSubject.name}</h3>
            <h4 className="text-center">{selectedSubject.passedYear}</h4>
            <h3 className="text-center my-3">Grade: {selectedSubject.grade}</h3>
            {selectedSubject.promoted || selectedSubject.finalExam
                ? ( 
                    <div class="alert alert-success text-center" role="alert">
                        This subject is promoted!
                    </div> 
              ) 
                : ( 
                    <div class="alert alert-secondary text-center" role="alert">
                        This subject is not promoted yet
                    </div>
                )
            }
        </Fragment>
    );
}
 
export default PassedSubjectData;