import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import '../styles/Frontpage.css';

function Frontpage() {
  return (
<main>
  <div className="p-5 text-center bg-image" id='banner'>
    <div className="mask">
      <div className="d-flex justify-content-center align-items-center h-200 " id='banner-inner'>
        <div className="text-white">
          <h1 className="mb-3" id='banner-h1'>Find your next stay with us</h1>
          <h4 className="mb-3" id='banner-p'>Search low prices on hotels, homes and much more...</h4>
          <a className="btn  btn-lg mt-4" id='cta' href="/home" role="button">BOOK NOW</a>
        </div>
      </div>
    </div>
  </div>

{/* https://i.postimg.cc/XqLn8L6g/h3-img-08-520x787-1.png */}
{/* side by side */}
<div className="card">
        <div className="row no-gutters px-5 py-5 outer-row">
          
            <div className="col text-center text-left-section">
                <div className="px-2 align-middle" >
                    <h4 className="subtitle">STAY WITH OUR LUXURY ROOMS</h4>
                    <h2 className='title'>Stay and Enjoy</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                    <a href="/about" className="btn btn-primary">More about us</a>
                </div>
                
            </div>
            <div className="col-auto ">
                <img src="https://i.postimg.cc/XqLn8L6g/h3-img-08-520x787-1.png" className="img-fluid" alt="" />
            </div>
        </div>
     
  </div>

  {/* featured cards */}
  <FeaturedRooms></FeaturedRooms>
  </main>
  )
}

export default Frontpage;