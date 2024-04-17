import React, { useState } from "react"
import Modal from "../components/Modal"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const MyApartments = ({ apartments, user }) => {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = (apartment) => {
    setSelectedApartment(apartment)
    setModalOpen(!modalOpen)

    if (!modalOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }
  const myApartments = apartments.filter((apt) => apt.user_id === user.id)
  console.log(myApartments)
  return (
    <>
      <div className="index-cont">
        <div className="index-top-text justify-center align-center">
          <img
            className="logo"
            src={logo}
            alt="two Vs overlapping in an elegant font"
          />
          <h2 className="index-h2 fancy-font" style={{ marginBottom: "4vh" }}>
            My Apartments
          </h2>
        </div>
        <div className="cards-cont">
          {myApartments.map((apartment, index) => (
            <div className="index-card" key={index}>
              <div className="card-image-container">
                <FontAwesomeIcon
                  className="edit-icon opacity-transition opacity-hover"
                  icon={faPenToSquare}
                  data-testid="edit-icon"
                />
                <FontAwesomeIcon
                  className="trash-icon opacity-transition opacity-hover"
                  icon={faTrash}
                  data-testid="delete-icon"
                />
                <img
                  className="card-image"
                  src={apartment.image}
                  alt="my unit"
                />
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
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
              <p className="subtle-btn" onClick={() => handleClick(apartment)}>
                {"See More "}
                <FontAwesomeIcon icon={faChevronRight} />
              </p>
              {modalOpen && (
                <Modal
                  selectedApartment={selectedApartment}
                  handleClick={handleClick}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyApartments
