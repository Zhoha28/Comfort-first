import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <section class="contact-area" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="contact-content text-center">
                    <a href="/" className='navbar-brand text-white'>Comfort First</a>
                    <p><i>Experience the difference with us. and we promise you won't regret it.</i></p>
                    <div class="hr"></div>
                    <h6>299 Doon Valley Dr, Kitchener, ON N2G 4M4.</h6>
                    <div class="contact-social">
                        <ul>
                            <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-behance"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
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