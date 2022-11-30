import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className='navbar-brand text-black'>Pr@l-Tech</span>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-black">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Work" >Work</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio" >Portfolio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" >Testimonials</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contact" >Contact me</Link>
            </li>
          </ul>

<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

          

        </div>
      </div>
    </nav>
  ) 
}

export default Navbar