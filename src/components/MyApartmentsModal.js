import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faShower } from "@fortawesome/free-solid-svg-icons"
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faBaby } from "@fortawesome/free-solid-svg-icons"

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
            {selectedApartment.name}
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
            <div style={{ marginTop: "6vh", marginBottom: "2vh" }}>
              <div className="category">Popular Amenities</div>
              <div className="modal-text-row d-flex">
                {selectedApartment.fiber_optic && (
                  <p className="modal-icon-text">
                    <FontAwesomeIcon icon={faWifi} /> Fiber Optic Internet
                  </p>
                )}
                {selectedApartment.concierge && (
                  <p className="modal-icon-text">
                    <FontAwesomeIcon icon={faBellConcierge} /> Concierge
                  </p>
                )}
              </div>
              <div className="modal-text-row d-flex">
                {selectedApartment.personal_chef && (
                  <span className="modal-icon-text">
                    <FontAwesomeIcon icon={faUtensils} /> Personal Chef
                  </span>
                )}
                {selectedApartment.onsite_daycare && (
                  <span className="modal-icon-text">
                    <FontAwesomeIcon icon={faBaby} /> Onsite Daycare
                  </span>
                )}
              </div>
              {showMore ? (
                <span>
                  <h3 className="category" style={{ marginTop: "2vh" }}>
                    Internet
                  </h3>
                  <ul>
                    {selectedApartment.keyless_entry && <li>Keyless Entry</li>}
                    {selectedApartment.smart_thermostat && (
                      <li>Smart Thermostat</li>
                    )}
                    {selectedApartment.smart_security_system && (
                      <li>Smart Security System</li>
                    )}
                  </ul>
                  <h3 className="category">Home</h3>
                  <ul>
                    {selectedApartment.maid_service && <li>Maid Service</li>}
                    {selectedApartment.spa && <li>Spa</li>}
                  </ul>
                  <h3 className="category">Kitchen</h3>
                  <ul>
                    {selectedApartment.full_kitchen && <li>Full Kitchen</li>}
                    {selectedApartment.pizza_ovens && <li>Pizza Oven</li>}
                    {selectedApartment.hibachi_grill && <li>Hibachi Grill</li>}
                  </ul>
                  <h3 className="category">Outdoors</h3>
                  <ul>
                    {selectedApartment.rooftop_pool && <li>Rooftop Pool</li>}
                    {selectedApartment.ocean_view && <li>Ocean View</li>}
                    {selectedApartment.golf_course && <li>Golf Course</li>}
                    {selectedApartment.community_garden && (
                      <li>Community Garden</li>
                    )}
                  </ul>
                  <h3 className="category">Pets</h3>
                  <ul>
                    <li>{selectedApartment.pets}</li>
                  </ul>
                </span>
              ) : (
                <span id="dots"></span>
              )}
            </div>
            <p onClick={toggleShowMore} className="subtle-btn">
              {showMore ? (
                <span>
                  <FontAwesomeIcon icon={faChevronLeft} /> Read less
                </span>
              ) : (
                <span>
                  Read more <FontAwesomeIcon icon={faChevronRight} />
                </span>
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
