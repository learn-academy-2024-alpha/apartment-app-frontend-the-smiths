import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = ({ handleShowSignIn, logOut, userSignedIn }) => {
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
        <NavLink
          to="/apartments"
          className="opacity-transition opacity-hover no-text-dec"
        >
          Available Apartments
        </NavLink>
        {userSignedIn && (
          <NavLink
            to="/my-apartments"
            className="no-text-dec opacity-transition opacity-hover"
          >
            My Apartments
          </NavLink>
        )}
        <a
          href="https://maldives-magazine.com/top-10/10-experiences-every-traveler-maldives.htm"
          className="opacity-transition opacity-hover no-text-dec"
          target="_blank"
        >
          Explore the Maldives
        </a>
      </div>
      <div>
        {!userSignedIn && (
          <div className="d-flex header-gap login-get-started-cont">
            <NavLink to="/">
              <button onClick={handleShowSignIn} className="slider-btn">
                <span>Get Started </span>
              </button>
            </NavLink>
          </div>
        )}
        {userSignedIn && (
          <NavLink to="/">
            <button
              onClick={logOut}
              className="slider-btn"
              style={{ width: "9vw" }}
            >
              <span>Log Out </span>
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
