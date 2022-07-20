import React from 'react'

function Room({ room }) {
  let roomImg = room.imageurls[1];

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
            <a className='btn btn-dark'>View details &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Room;