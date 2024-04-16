import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = ({ handleShowSignIn, signOut, userSignedIn }) => {
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
      {!userSignedIn && (
        <div className="d-flex header-gap login-get-started-cont">
          <NavLink to="/">
            <button onClick={handleShowSignIn} className="slider-btn">
              <span>Get Started </span>
            </button>
          </NavLink>
        </div>
      )}
      <div>
        {userSignedIn && (
          <NavLink
            style={{ marginRight: "2vw" }}
            to="/my-apartments"
            className="no-text-dec apartment-link "
          >
            My Apartments
          </NavLink>
        )}
        {userSignedIn && (
          <NavLink to="/">
            <button onClick={signOut} className="slider-btn">
              <span>Log Out </span>
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
