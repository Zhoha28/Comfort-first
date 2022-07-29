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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4" id="Navbar-container">
            <a class="navbar-brand" href="/">Comfort First</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Hotels</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/services">Services</a>
                    </li>

                    <li class="nav-item ">
                        <a class="nav-link" href="/about">About Us</a>
                    </li>



                    {localStorage.getItem('currentUser') ? (
                        <div class="dropdown mr-5">
                       
                            <DropdownButton class="dropdown-menu btn-drop" aria-labelledby="dropdownMenuButton" title={JSON.parse(localStorage.getItem('currentUser')).name}>
                                <Dropdown.Item  class="dropdown-item" href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item class="dropdown-item" href="#" onClick={logout}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </div>

                    ) : (
                        <>
                            <li class="nav-item active">
                                <a class="nav-link" href="/register">
                                    Register
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">
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