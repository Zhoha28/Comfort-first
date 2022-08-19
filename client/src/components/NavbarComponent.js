import React from 'react';
import '../styles/Navbar.css';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = '/login'
    }
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4" id="Navbar-container">
        //     <a className="navbar-brand" href="/">Comfort First</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse justify-content-center px-3" id="navbarNav">

        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="/">Home</a>
        //             </li>

        //             <li className="nav-item">
        //                 <a className="nav-link" href="/services">Services</a>
        //             </li>

        //             <li className="nav-item ">
        //                 <a className="nav-link" href="/about">About Us</a>
        //             </li>

        //             {localStorage.getItem('currentUser') ? (
        //                <><li className="nav-item">
        //                 <a className="nav-link" href="/home">Hotels</a>
        //             </li>
        //                 <li className="dropdown nav-item justify-self-end">
        //                     <DropdownButton className="dropdown-menu btn-drop btn-primary-outline" aria-labelledby="dropdownMenuButton" title={JSON.parse(localStorage.getItem('currentUser')).name}>
        //                         <Dropdown.Item  className="dropdown-item" href="/profile">Profile</Dropdown.Item>
        //                         <Dropdown.Item className="dropdown-item" href="#" onClick={logout}>Logout</Dropdown.Item>
        //                     </DropdownButton>
        //                 </li>
        //                 </> 

        //             ) : (
        //                 <>
        //                     <li className="nav-item active">
        //                         <a className="nav-link" href="/register">
        //                             Register
        //                         </a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/login">
        //                             Login
        //                         </a>
        //                     </li>
        //                 </>
        //             )}



        //         </ul>
        //     </div>
        // </nav>

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Comfort First</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                      


                {localStorage.getItem('currentUser') ? (
                       <>
                        <Nav.Link href="/home">Hotels</Nav.Link>
                        <NavDropdown className='username' title={JSON.parse(localStorage.getItem('currentUser')).name} id="basic-nav-dropdown">
                           
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/" onClick={logout}>
                            Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        </> 

                    ) : (
                        <>
                          <Nav.Link href="/register">Register</Nav.Link>
                          <Nav.Link href="/login">Login</Nav.Link>
                           
                        </>
                    )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;