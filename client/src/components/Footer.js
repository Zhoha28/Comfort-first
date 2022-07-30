import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <section className="contact-area" id="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="contact-content text-center">
                    <a href="/" className='navbar-brand text-white company'>Comfort First</a>
                    <p className='rubick'><i>Experience the difference with us. and we promise you won't regret it.</i></p>
                    <div className="hr"></div>
                    <h6 className='rubick'>299 Doon Valley Dr, Kitchener, ON N2G 4M4.</h6>
                    <div className="contact-social">
                        <ul>
                            <li><a className="hover-target" href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="hover-target" href="/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a className="hover-target" href="/"><i className="fab fa-github"></i></a></li>
                            <li><a className="hover-target" href="/"><i className="fab fa-behance"></i></a></li>
                            <li><a className="hover-target" href="/"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default Footer