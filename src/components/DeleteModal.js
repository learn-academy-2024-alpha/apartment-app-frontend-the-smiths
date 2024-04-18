import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const DeleteModal = ({
  handleDeleteApartment,
  setTheyWantToDelete,
  deleteId,
  deleteName,
}) => {
  const modalRef = useRef(null)
  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleDeleteApartment(null)
    }
  }

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden"
  }

  const handleModalClose = () => {
    document.body.style.overflow = ""
  }
  React.useEffect(() => {
    handleModalOpen()
    return () => {
      handleModalClose()
    }
  }, [])

  const handleConfirmDelete = () => {
    setTheyWantToDelete(true)
    handleDeleteApartment(deleteId)
  }

  const handleCancel = () => {
    handleDeleteApartment(null)
    setTheyWantToDelete(false)
  }

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div
        ref={modalRef}
        className="modal-cont d-flex"
        style={{ height: "30vh", textAlign: "center" }}
      >
        <FontAwesomeIcon
          className="edit-modal-close-btn"
          onClick={handleCancel}
          icon={faTimesCircle}
        />
        <div
          className="modal-text-cont"
          style={{ overflowY: "auto", fontWeight: 600 }}
        >
          <p>{`Are You Sure You Want to Delete ${deleteName}?`}</p>
          <div
            className="d-flex"
            style={{ justifyContent: "space-evenly", marginTop: "5vh" }}
          >
            <button
              className="form-submit-btn darker darker-transition"
              type="submit"
              style={{ width: "9vw" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="form-submit-btn darker darker-transition"
              type="submit"
              style={{ width: "9vw", backgroundColor: "#eccba3" }}
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
