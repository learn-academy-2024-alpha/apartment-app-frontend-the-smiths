import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faShower } from "@fortawesome/free-solid-svg-icons"
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Modal = ({ selectedApartment, handleClick }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore)
  }
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleClick()
    }
  }

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div ref={modalRef} className="modal-cont d-flex">
        <div className="modal-text-cont">
          <h2
            style={{ fontSize: "6vh", fontWeight: "600" }}
            className="fancy-font"
          >
            Name
          </h2>
          <div style={{ marginTop: "-1vh" }}>
            {selectedApartment.city}, {selectedApartment.state}
          </div>
          <div style={{ marginTop: "3.5vh" }}>
            <div className="modal-text-row d-flex">
              <p className="modal-icon-text">
                <FontAwesomeIcon icon={faBed} /> {selectedApartment.bedrooms}
                {selectedApartment.bedrooms === 1 ? " bedroom" : " bedrooms"}
              </p>
              <p className="modal-icon-text">
                <FontAwesomeIcon icon={faUserGroup} /> 4 guests
              </p>
            </div>
            <div className="modal-text-row d-flex">
              <span className="modal-icon-text">
                <FontAwesomeIcon icon={faShower} />{" "}
                {selectedApartment.bathrooms} bathrooms{" "}
              </span>
              <span className="modal-icon-text">
                <FontAwesomeIcon icon={faRulerCombined} />{" "}
                {selectedApartment.square_footage} sq/ft
              </span>
            </div>
            <div style={{ marginTop: "6vh" }}>
              <div style={{ fontSize: "3vh", fontWeight: "600" }}>
                Popular Amenities
              </div>
              <ul>
                <li>Keyless Entry</li>
                <li>Concierge</li>
                <li>Personal Chef</li>
                <li>Onsite Daycare</li>
              </ul>
              {showMore ? (
                <span>
                  <h3>INTERNET</h3>
                  <ul>
                    <li>Fiber Optic Wifi</li>
                    <li>Smart Thermostat</li>
                    <li>Smart Security System</li>
                  </ul>
                  <h3>HOME</h3>
                  <ul>
                    <li>Maid Service</li>
                    <li>Spa</li>
                  </ul>
                  <h3>KITCHEN</h3>
                  <ul>
                    <li>Full Kitchen</li>
                    <li>Pizza Oven</li>
                    <li>Hibachi Grill</li>
                  </ul>
                  <h3>OUTDOORS</h3>
                  <ul>
                    <li>Rooftop Pool</li>
                    <li>Ocean View</li>
                    <li>Golf Course</li>
                    <li>Community Garden</li>
                  </ul>
                </span>
              ) : (
                <span id="dots">...</span>
              )}
            </div>
            <p onClick={toggleShowMore} className="subtle-btn">
              {showMore ? (
                <>
                  <FontAwesomeIcon icon={faChevronLeft} /> Read less
                </>
              ) : (
                <>
                  Read more <FontAwesomeIcon icon={faChevronRight} />
                </>
              )}
            </p>
          </div>
        </div>
        <FontAwesomeIcon
          className="modal-close-btn"
          onClick={() => handleClick()}
          icon={faTimesCircle}
        />
        <div className="modal-img-cont d-flex">
          <img className="modal-img" src={selectedApartment.image} alt="unit" />
        </div>
      </div>
    </div>
  )
}

export default Modal
