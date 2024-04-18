import React, { useState } from "react"
import IndexModal from "../components/IndexModal"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Index = ({ apartments }) => {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSeeMore = (apartment) => {
    setSelectedApartment(apartment)
    setModalOpen(!modalOpen)

    if (!modalOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }

  return (
    <div className="index-cont">
      <div className="index-top-text justify-center align-center">
        <img
          className="logo"
          src={logo}
          alt="two Vs overlapping in an elegant font"
        />
        <h2 className="index-h2 fancy-font">
          Book Luxury Apartments in the Maldives
        </h2>
        <p className="index-sub-header">
          {`We selected ${apartments.length} apartments worth renting in the Maldives`}
        </p>
      </div>
      <p className="spotlight-text">Apartment Spotlight</p>
      <div className="cards-cont">
        {apartments.map((apartment, index) => (
          <div className="index-card" key={index}>
            <div className="card-image-container">
              <img className="card-image" src={apartment.image} alt="unit" />
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <p
                style={{
                  fontSize: "3.5vh",
                  fontWeight: "600",
                  marginTop: "2vh",
                }}
                className="fancy-font"
              >
                {apartment.name}
              </p>
              <p
                className="fancy-font"
                style={{
                  fontSize: "3.5vh",
                  fontWeight: "600",
                  marginTop: "2vh",
                }}
              >
                ${apartment.price}
                <span
                  className="reg-font"
                  style={{ fontSize: "2vh", fontWeight: 400 }}
                >
                  /night
                </span>
              </p>
            </div>
            <p
              style={{
                marginTop: "-1.5vh",
                fontSize: "1.75vh",
              }}
            >
              {apartment.city}, {apartment.state}
            </p>
            <p className="modal-icon-text">
              <FontAwesomeIcon icon={faBed} /> {apartment.bedrooms}
              {apartment.bedrooms === 1 ? " bedroom" : " bedrooms"}
            </p>
            <p className="subtle-btn" onClick={() => handleSeeMore(apartment)}>
              {"See More "}
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
            {modalOpen && (
              <IndexModal
                selectedApartment={selectedApartment}
                handleSeeMore={handleSeeMore}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
