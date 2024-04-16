import React, { useState } from "react"
import SignUp from "../components/SignUp.js"
import SignIn from "../components/SignIn.js"
import { NavLink } from "react-router-dom"

const Home = ({
  showSignInForm,
  showSignUpForm,
  handleCreateAccount,
  handleShowSignIn,
  signUp,
  signIn,
  userSignedIn,
  checkLoggedInStatus,
}) => {
  return (
    <div className="home-cont">
      <div className="hero-text justify-center">
        <h2 className="hero-h2 fancy-font">Live the Vibe, Love Your Life</h2>
        <h3 className="hero-h3">
          As the leader of luxury apartment rentals in the Maldives, we offer an
          unparalleled experience that redefines modern elegance.
        </h3>
      </div>
      <div className="card-container d-flex" data-testid="card-container">
        <div className="card-left align-center justify-center">
          {!showSignInForm && !showSignUpForm && !checkLoggedInStatus && (
            <div
              className="justify-center align-center"
              style={{ flexDirection: "column" }}
            >
              <h2
                className="fancy-font"
                style={{ fontSize: "5.5vh", textAlign: "center" }}
              >
                Luxury in the Maldives
              </h2>
              <div
                className="permium-services"
                style={{
                  textAlign: "center",
                }}
              >
                <p>Maid Services</p>
                <p>Personal Chefs</p>
                <p>Fiber Optic Wifi</p>
              </div>
              <button
                onClick={handleShowSignIn}
                className="slider-btn get-started-2"
              >
                <span>Sign In </span>
              </button>
            </div>
          )}
          {userSignedIn && (
            <div className="align-center" style={{ flexDirection: "column" }}>
              <h2
                className="fancy-font"
                style={{ fontSize: "5.5vh", textAlign: "center" }}
              >
                Welcome to Luxury Living
              </h2>
              <NavLink to="/apartments">
                <button
                  onClick={handleShowSignIn}
                  className="slider-btn get-started-2"
                  style={{ width: "17.5vw" }}
                >
                  <span>Available Apartments </span>
                </button>
              </NavLink>
            </div>
          )}
          {showSignInForm && !userSignedIn && !checkLoggedInStatus && (
            <SignIn signIn={signIn} handleCreateAccount={handleCreateAccount} />
          )}
          {showSignUpForm && !userSignedIn && (
            <SignUp signUp={signUp} handleShowSignIn={handleShowSignIn} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
