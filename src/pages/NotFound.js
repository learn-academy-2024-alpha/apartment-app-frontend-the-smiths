import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="align-center justify-center not-found-container">
      <h1 className="not-found-404 fancy-font">4 0 4</h1>
      <h3>Page Not Found</h3>
      <NavLink to="/">
        <button className="slider-btn">
          <span>Home </span>
        </button>
      </NavLink>
    </div>
  )
}

export default NotFound
