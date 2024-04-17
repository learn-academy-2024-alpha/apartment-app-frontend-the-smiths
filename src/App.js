import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import mockApartments from "./mockApartments.js"
import "./App.css"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"
import Index from "./pages/Index.js"
import MyApartments from "./pages/MyApartments.js"

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [showSignInForm, setShowSignInForm] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [user, setUser] = useState(null)
  const [userSignedIn, setUserSignedIn] = useState(false)
  const [checkLoggedInStatus, setCheckLoggedInStatus] = useState(null)
  const [showNewForm, setShowNewForm] = useState(false)
  const location = useLocation()
  const isIndexPage = location.pathname === "/apartments"
  const isMyApartmentsPage = location.pathname === "/my-apartments"

  useEffect(() => {
    const userValue = localStorage.getItem("user")
    if (userValue) {
      setUserSignedIn(true)
    }
    setCheckLoggedInStatus(JSON.parse(userValue))
    setUser(JSON.parse(userValue))
  }, [])

  const signIn = async (user) => {
    try {
      const signInResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!signInResponse) {
        throw new Error(signInResponse.errors)
      }
      const payload = await signInResponse.json()
      localStorage.setItem("token", signInResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setUserSignedIn(true)
      setUser(payload)
    } catch (error) {
      console.log("Error fetching sign in data")
    }
  }

  const signUp = async (user) => {
    try {
      const signUpResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!signUpResponse) {
        throw new Error(signUpResponse.errors)
      }
      const payload = await signUpResponse.json()
      localStorage.setItem("token", signUpResponse.headers.get("Authorization"))
      localStorage.setItem("user", JSON.stringify(payload))
      setUser(payload)
      setUserSignedIn(true)
    } catch (error) {
      console.log("Error fetching sign up data")
    }
  }

  const signOut = async () => {
    try {
      const signOutResponse = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      if (!signOutResponse) {
        throw new Error(signOutResponse.errors)
      }
      await signOutResponse.json()
      setUser(null)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setUserSignedIn(false)
    } catch (error) {
      console.log("Error fetching log out data")
    }
  }

  const handleShowSignIn = () => {
    setShowSignInForm(true)
    setShowSignUpForm(false)
  }

  const handleCreateAccount = () => {
    setShowSignInForm(false)
    setShowSignUpForm(true)
  }

  const logOut = () => {
    signOut()
    setShowSignInForm(false)
    setShowSignUpForm(false)
  }

  const handleCreateListing = () => {
    console.log(showNewForm)
    setShowNewForm(true)
  }
  const createApartment = async (apartment) => {
    console.log(apartment)
  }
  return (
    <div
      className={isIndexPage || isMyApartmentsPage ? "muted-bg" : "tropical-bg"}
    >
      <Header
        userSignedIn={userSignedIn}
        handleShowSignIn={handleShowSignIn}
        logOut={logOut}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              signIn={signIn}
              signUp={signUp}
              showSignInForm={showSignInForm}
              showSignUpForm={showSignUpForm}
              handleCreateAccount={handleCreateAccount}
              handleShowSignIn={handleShowSignIn}
              userSignedIn={userSignedIn}
              checkLoggedInStatus={checkLoggedInStatus}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/apartments" element={<Index apartments={apartments} />} />
        {userSignedIn && (
          <Route
            path="/my-apartments"
            element={
              <MyApartments
                handleCreateListing={handleCreateListing}
                showNewForm={showNewForm}
                apartments={apartments}
                user={user}
                createApartment={createApartment}
              />
            }
          />
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
