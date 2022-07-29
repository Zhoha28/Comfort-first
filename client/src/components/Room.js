import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Room({ room , fromdate , todate}) {

  // hook for show modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className='container mx-auto' id='roomcontainer'>

      
      <div className='row justify-content-center mt-5 boxshadow roomcontainerrow' >
        <div className='col-md-4 '>
          <img src={room.imageurls[0]} className='smallimg' alt="{room.name}"></img>

        </div>
        <div className='col-md-7 text-left vertical-center'>
          <h2>{room.name}</h2>

          <span className='points'><strong>Max Count - </strong>{room.maxcount}</span>
          <span className='points'><strong>Phone Number - </strong>{room.phonenumber}</span>
          <span className='points'><strong>Type - </strong>{room.type}</span>
          <div className='floatright btn-holder'>
            {/* react bootstrap */}
            <Button variant="primary" onClick={handleShow} className="btn btn-dark btn-small-primary">
              View details &nbsp;
            </Button>

          {(fromdate && todate) && (
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className="btn btn-dark m-2">Book Now</button>
          </Link>
          )}

          </div>
        </div>
        {/* modal for the view details section */}
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{room.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            {/* carousel */}
            <Carousel>
              {room.imageurls.map(url => {
                return (<Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="Third slide"
                  />



                </Carousel.Item>)
              })}


            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <p className='py-2'>
              {room.description}
            </p>

          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}

export default Room;