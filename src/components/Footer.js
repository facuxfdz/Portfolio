import React, { Fragment } from 'react'

const Footer = () => {
    return ( 
        <footer>
                <div className="container p-5">
                    <div className="row text-center">

                        <div className="col-md-6 contact">
                            <h1 className="text-light">Contact</h1>
                            <a className="link-secondary d-block my-2" href="tel:+5491124870351">+549 1124870351</a>
                            <a className="link-secondary" href="mailto:fdzfacundoagustin@gmail.com">fdzfacundoagustin@gmail.com</a>
                        </div>

                        <div className="col-md-6 footer-github">
                            <h1 className="text-light">My github profile</h1>
                            <i class="fab fa-github"><a className="mx-3 link-secondary" href="https://github.com/facuxfdz">facuxfdz</a></i>
                        </div>

                    </div>
                </div>
        </footer>
    );
}
 
export default Footer;