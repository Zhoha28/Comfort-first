import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function FeaturedRoom({ room }) {

    // hook for show modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (


        <div className="card card-featured-room ">
            <img className="card-img-top" src={room.imageurls[0]} alt="{room.name}" />
            <div className="card-body">
                <h5 className="card-title roomname">{room.name}</h5>
                <p className="card-text roomdes">


                    <span className='points'><strong>Type - </strong>{room.type}</span>
                </p>
                <div className='floatright btn-holder'>
                    {/* react bootstrap */}
                    <Button variant="primary" onClick={handleShow} className="btn btn-small-primary">
                        View details &nbsp;
                    </Button>

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


    )
}

export default FeaturedRoom;