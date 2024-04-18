import React, { useRef } from "react"
import ApartmentNew from "../pages/ApartmentNew"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const NewModal = ({ createApartment, user, handleNewClick }) => {
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleNewClick(null)
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

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div ref={modalRef} className="modal-cont d-flex">
        <FontAwesomeIcon
          className="edit-modal-close-btn"
          onClick={() => handleNewClick(null)}
          icon={faTimesCircle}
        />
        <div className="modal-text-cont" style={{ overflowY: "auto" }}>
          <ApartmentNew
            handleNewClick={handleNewClick}
            createApartment={createApartment}
            user={user}
          />
        </div>
      </div>
    </div>
  )
}

export default NewModal
