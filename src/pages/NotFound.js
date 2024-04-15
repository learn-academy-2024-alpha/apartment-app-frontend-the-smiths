import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const NotFound = () => {
  return (
    <div className="align-center justify-center not-found-container">
      <h1 className="not-found-404 fancy-font">4 0 4</h1>
      <h3 style={{ marginTop: "-4vh" }}>Page Not Found</h3>
      <NavLink className="subtle-btn no-text-dec" to="/apartments">
        {"View More Apartments "}
        <FontAwesomeIcon icon={faChevronRight} />
      </NavLink>
    </div>
  )
}

export default NotFound
