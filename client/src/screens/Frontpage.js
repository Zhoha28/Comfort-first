import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import '../styles/Frontpage.css';

function Frontpage() {
  return (
<main>
  <div class="p-5 text-center bg-image" id='banner'>
    <div class="mask">
      <div class="d-flex justify-content-center align-items-center h-200 " id='banner-inner'>
        <div class="text-white">
          <h1 class="mb-3" id='banner-h1'>Find your next stay with us</h1>
          <h4 class="mb-3" id='banner-p'>Search low prices on hotels, homes and much more...</h4>
          <a class="btn  btn-lg mt-4" id='cta' href="/home" role="button">BOOK NOW</a>
        </div>
      </div>
    </div>
  </div>

{/* https://i.postimg.cc/XqLn8L6g/h3-img-08-520x787-1.png */}
{/* side by side */}
<div class="card">
        <div class="row no-gutters px-5 py-5 outer-row">
          
            <div class="col text-center text-left-section">
                <div class="px-2 align-middle" >
                    <h4 className="subtitle">STAY WITH OUR LUXURY ROOMS</h4>
                    <h2 className='title'>Stay and Enjoy</h2>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!</p>
                    <a href="/about" class="btn btn-primary">More about us</a>
                </div>
                
            </div>
            <div class="col-auto ">
                <img src="https://i.postimg.cc/XqLn8L6g/h3-img-08-520x787-1.png" class="img-fluid" alt="" />
            </div>
        </div>
     
  </div>

  {/* featured cards */}
  <FeaturedRooms></FeaturedRooms>
  </main>
  )
}

export default Frontpage;