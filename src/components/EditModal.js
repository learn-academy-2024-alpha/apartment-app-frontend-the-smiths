import React, { useRef } from "react"
import ApartmentEdit from "../pages/ApartmentEdit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const EditModal = ({
  apartments,
  user,
  updateApartment,
  editClicked,
  aptId,
  handleEditClick,
}) => {
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleEditClick(null)
    }
  }

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div ref={modalRef} className="modal-cont d-flex">
        <FontAwesomeIcon
          className="edit-modal-close-btn"
          onClick={() => handleEditClick(null)}
          icon={faTimesCircle}
        />
        <div className="modal-text-cont">
          <ApartmentEdit
            apartments={apartments}
            user={user}
            updateApartment={updateApartment}
            editClicked={editClicked}
            aptId={aptId}
            handleEditClick={handleEditClick}
          />
        </div>
      </div>
    </div>
  )
}

export default EditModal
