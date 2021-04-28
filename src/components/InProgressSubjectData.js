import React, { Fragment } from 'react'

const InProgressSubjectData = ({selectedSubject}) => {
    return ( 
        <Fragment>
            <h3 className="text-center">{selectedSubject.name}</h3>
            <table class="table table-light table-bordered table-hover">
                <thead>
                    <tr>
                    <th scope="col">Day</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>               
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> {selectedSubject.day} </th>
                    <td>{selectedSubject.from}</td>
                    <td>{selectedSubject.to}</td>
                    </tr>

                </tbody>
            </table>

            {/* <p className="text-center">Day: {}</p>
            <h3 className="text-center my-3">From: {}</h3>
            <h3 className="text-center">To: {}</h3> */}
        </Fragment>
    );
}
 
export default InProgressSubjectData;