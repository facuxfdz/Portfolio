import React, { useState } from 'react';
import {Link} from 'react-router-dom';



const Form1 = () => {

    const [nameIsEmpty, handleNameState] = useState('');

    const changeName = e => {

        handleNameState(e.target.value);
    }
    return (
        
        <div className="d-flex h-100 justify-content-center align-items-center">
            <div className="col-md-6 p-2">
                <div className="card card-block mx-auto w-75 text-center p-5">

                    <h3 className="mb-4">Hi! Type your name below and let's get to know me</h3>
                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={nameIsEmpty}
                            id="floatingInput"
                            onChange={changeName}    
                        />
                        <label for="floatingInput">Name</label>
                    </div>

                    
                        {(nameIsEmpty.trim() === '')
                            ?   <button type="button" className="btn btn-primary" disabled>Continue</button>
                            :   <Link to={"/home"} className="btn btn-primary">Continue</Link>

                        }
                    

                </div>                
            </div>

        </div>
    );
}
 
export default Form1;