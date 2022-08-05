import React from 'react';
import '../styles/Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {
    function logout() {
        localStorage.removeItem('currentUser')
        window.location.href = '/login'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4" id="Navbar-container">
            <a className="navbar-brand" href="/">Comfort First</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center px-3" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Hotels</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Services</a>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link" href="/about">About Us</a>
                    </li>

                    {localStorage.getItem('currentUser') ? (
                        <li className="dropdown nav-item">
                            <DropdownButton className="dropdown-menu btn-drop" aria-labelledby="dropdownMenuButton" title={JSON.parse(localStorage.getItem('currentUser')).name}>
                                <Dropdown.Item  className="dropdown-item" href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" href="#" onClick={logout}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </li>

                    ) : (
                        <>
                            <li className="nav-item active">
                                <a className="nav-link" href="/register">
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                        </>
                    )}



                </ul>
            </div>
        </nav>
    )
}

export default Navbar;