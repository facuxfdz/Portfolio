import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Header = () => {
    const [headerInfo,handleInfo] = useState('');
    
    useEffect(() => {
        callAPI();
    },[]);

    const callAPI = async () => {
        const res = await axios.get(process.env.REACT_APP_BACKEND_OWNER_URL);
        handleInfo(res.data.ownerInfo.headerInfo);
    }

    return (
            <header className="page-header">
                <div className="container pt-3 pb-1">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 mt-5">
                            <h2>My portfolio website</h2>
                            {headerInfo 
                                ?
                                (
                                    <p className="text-dark">
                                        {headerInfo}
                                    </p>
                                )
                                : null
                            }

                        </div>
                        <div className="col-md-6 text-center">
                            <img src="admin-image.png" />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7f61a7" fillOpacity="1" d="M0,224L34.3,229.3C68.6,235,137,245,206,234.7C274.3,224,343,192,411,197.3C480,203,549,245,617,240C685.7,235,754,181,823,176C891.4,171,960,213,1029,213.3C1097.1,213,1166,171,1234,154.7C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

            </header>

        
    );
}
 
export default Header;