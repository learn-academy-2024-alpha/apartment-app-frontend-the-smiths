import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { useState } from "react"
const Header = ({ showSignUpForm }) => {
  const [formShow, setFormShow] = useState(false)
  const handleShowForm = () => {
    setFormShow(true)
    showSignUpForm(formShow)
    console.log(formShow)
  }
  return (
    <nav className="header-nav align-center">
      <div>
        <NavLink className="align-center no-text-dec" to="/">
          <img
            src={logo}
            alt="two Vs overlapping in an elegant font"
            className="logo"
          />
          <span className="logo-text fancy-font">Vibe Villas</span>
        </NavLink>
      </div>
      <div className="d-flex header-gap">
        <NavLink to="/apartments" className="apartment-link no-text-dec">
          Apartments
        </NavLink>
        <NavLink to="/contact" className="contact-link no-text-dec">
          Contact
        </NavLink>
      </div>
      <div className="d-flex header-gap login-get-started-cont">
        <NavLink to="/signin" className="align-center no-text-dec login-link">
          Login
        </NavLink>
        <NavLink>
          <button onClick={handleShowForm} className="slider-btn">
            <span>Get Started </span>
          </button>
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
