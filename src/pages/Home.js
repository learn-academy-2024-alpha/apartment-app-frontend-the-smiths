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
        <div
          className={`card-left ${
            userSignedIn ? "justify-center align-center" : ""
          }`}
        >
          {!showSignInForm && !showSignUpForm && !userSignedIn && (
            <div
              className="justify-center align-center"
              style={{ flexDirection: "column" }}
            >
              <h2
                className="fancy-font"
                style={{ fontSize: "5.5vh", textAlign: "center" }}
              >
                Apartment Rentals in the Maldives
              </h2>
              <div
                className="permium-services"
                style={{
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "2vh",
                    fontWeight: "600",
                  }}
                >
                  Luxury Amenities
                </h3>
                <p className="home-services">Maid Services</p>
                <p className="home-services" style={{ marginTop: "-0.5vh" }}>
                  Personal Chefs
                </p>
                <p className="home-services" style={{ marginTop: "-0.5vh" }}>
                  Fiber Optic Internet
                </p>
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
          {showSignInForm && !userSignedIn && !userSignedIn && (
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
