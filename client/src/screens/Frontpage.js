import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import '../styles/Frontpage.css';

function Frontpage() {
  return (
    <main>


      <section className="site-hero overlay" style={{ backgroundImage: `url('https://i.postimg.cc/6pF9GVxj/hero-4.jpg')` }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row site-hero-inner justify-content-center align-items-center">
            <div className="col-md-10 text-center" data-aos="fade-up">
              <span className="custom-caption text-uppercase text-white d-block  mb-3">Welcome To 5 <span className="fa fa-star text-primary"></span>   Hotel</span>
              <h1 className="heading">A Best Place To Stay</h1>
            </div>
          </div>
        </div>

        <a className="mouse smoothscroll" href="#next">
          <div className="mouse-icon">
            <span className="mouse-wheel"></span>
          </div>
        </a>
      </section>



      <section className="py-5 bg-light" id='next'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure className="img-absolute">
                <img src="https://i.postimg.cc/xCJpNHYR/food-1.jpg" alt="Image" className="img-fluid" />
              </figure>
              <img src="https://i.postimg.cc/qRzScSc2/img-1.jpg" alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 className="heading">Welcome!</h2>
              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="/about" className="btn btn-primary text-white py-2 mr-3">Learn More</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
              <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div className="row">
        
          <div className="col-md-6 col-lg-6" data-aos="fade-up">
              <a href="#" className="room">
                <figure className="img-wrap">
                  <img src="https://i.postimg.cc/Pfv0CG5j/img-3.jpg" alt="Free website template" className="img-fluid mb-3" />
                </figure>
                <div className="p-3 text-center room-info">
                  <h2>Deluxe Rooms</h2>
              
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-6" data-aos="fade-up">
              <a href="#" className="room">
                <figure className="img-wrap">
                  <img src="https://i.postimg.cc/j2f1mfF5/img-2.jpg" alt="Free website template" className="img-fluid mb-3" />
                </figure>
                <div className="p-3 text-center room-info">
                  <h2>Non - Deluxe Rooms</h2>
                
                </div>
              </a>
            </div>

      


          </div>
        </div>
      </section>





      <section className="section bg-image overlay" style={{ backgroundImage: `url('https://i.postimg.cc/6pF9GVxj/hero-4.jpg')` }}>
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
              <h2 className="text-white font-weight-bold">A Best Place To Stay. Book now!</h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
              <a href="/home" className="btn btn-outline-white-primary py-3 text-white px-5">BOOK NOW</a>
            </div>
          </div>
        </div>
      </section>








    </main>
  )
}

export default Frontpage;