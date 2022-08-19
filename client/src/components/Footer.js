import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <>
            <footer className="section footer-section">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-md-4 ">
                            <h6 className='text-white'>Quick Links</h6>
                            <ul className="list-unstyled link">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/home">Hotels</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 ">
                        <h6 className='text-white'>Our Team</h6>
                            <ul className="list-unstyled link">
                                <li><a href="http://zhohadamani.live" target="_blank">Zhoha Damani</a></li>
                                <li><a href="#">Mihir Patel</a></li>
                                <li><a href="https://soft-pudding-df7dcb.netlify.app/" target="_blank">Joel Macwan</a></li>
                                <li><a href="/">Megha Mathew</a></li>
                                <li><a href="https://www.linkedin.com/in/aakash-achankutty/" target="_blank">Aakash Achankutty</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4  contact-info">

                            <p><span className="d-block"><span className="ion-ios-location h5 mr-3 text-primary"></span>Address:</span> <span> 299 Doon Valley Dr, <br /> Kitchener, ON N2G 4M4</span></p>
                            <p><span className="d-block"><span className="ion-ios-telephone h5 mr-3 text-primary"></span>Phone:</span> <span> (+1) 435 3533</span></p>
                            <p><span className="d-block"><span className="ion-ios-email h5 mr-3 text-primary"></span>Email:</span> <span> hello@comfortfirst.ca</span></p>
                        </div>

                    </div>
          
                </div>
            </footer>
        </>
    )
}

export default Footer;