import React, { useState } from "react"
import MyApartmentsModal from "../components/MyApartmentsModal.js"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import EditModal from "../components/EditModal.js"
import NewModal from "../components/NewModal.js"
import DeleteModal from "../components/DeleteModal.js"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

const MyApartments = ({
  apartments,
  user,
  createApartment,
  updateApartment,
  deleteApartment,
}) => {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [editClicked, setEditClicked] = useState(false)
  const [newClicked, setNewClicked] = useState(false)
  const [aptId, setAptId] = useState(null)
  const [deleteClicked, setDeleteClicked] = useState(false)
  const [theyWantToDelete, setTheyWantToDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState(null)
  const navigate = useNavigate()

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

  const handleEditClick = (aptId) => {
    setAptId(aptId)
    setEditClicked((prevEditClicked) => !prevEditClicked)
    document.body.classList.toggle("modal-open")
  }

  const handleNewClick = () => {
    setEditClicked(false)
    setNewClicked((prevNewClicked) => !prevNewClicked)
    if (theyWantToDelete) {
      document.body.classList.toggle("modal-open")
    }
  }

  const handleTrashIconClick = (id, name) => {
    setDeleteId(id)
    setDeleteName(name)
    setDeleteClicked((prevDeleteClicked) => !prevDeleteClicked)
  }

  const handleDeleteApartment = (id) => {
    deleteApartment(id)
    setDeleteClicked((prevDeleteClicked) => !prevDeleteClicked)
    navigate("/my-apartments")
  }

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
        <div style={{ display: "inline", marginBottom: "3vh" }}>
          <span
            style={{
              marginBottom: "3vh",
            }}
            className="subtle-btn"
            onClick={handleNewClick}
          >
            {"Create a Listing "}
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
        <div className="cards-cont">
          {myApartments.map((apartment, index) => (
            <div className="index-card" key={index}>
              <div className="card-image-container">
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute" }}>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEditClick(apartment.id)}>
                        <EditIcon data-testid="edit-icon" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() =>
                          handleTrashIconClick(apartment.id, apartment.name)
                        }
                      >
                        <DeleteIcon data-testid="delete-icon" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <img
                    className="card-image"
                    src={apartment.image}
                    alt="my unit"
                  />
                  {editClicked && (
                    <EditModal
                      apartments={apartments}
                      user={user}
                      updateApartment={updateApartment}
                      editClicked={editClicked}
                      aptId={aptId}
                      handleEditClick={handleEditClick}
                    />
                  )}
                  {newClicked && (
                    <NewModal
                      createApartment={createApartment}
                      user={user}
                      handleNewClick={handleNewClick}
                    />
                  )}
                  {deleteClicked && (
                    <DeleteModal
                      theyWantToDelete={theyWantToDelete}
                      handleDeleteApartment={handleDeleteApartment}
                      setTheyWantToDelete={setTheyWantToDelete}
                      deleteId={deleteId}
                      deleteName={deleteName}
                    />
                  )}
                </div>
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
                <MyApartmentsModal
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
