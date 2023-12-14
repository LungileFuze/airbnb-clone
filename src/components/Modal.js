import React from 'react'
import "./Modal.css"
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../actions/modalAction'

const Modal = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modal)
  const {openClose, content} = modal;

  let modalInLineStyle

  if(openClose === "open") {
    modalInLineStyle = {
      display: "block",
    }
   }else {
      modalInLineStyle = {
          display: "none"
      }
    }
  
  const closeModalHandler = () => {
    dispatch(openModal("close", ""))
  }
  return (
    <div className="site-modal" style={modalInLineStyle}>
        <div className="modal-content">
          <div className="col right">
            <span onClick={closeModalHandler} className="close">
              &times;
            </span>
          </div>
          <div>{content}</div>
        </div>
    </div>
  )
}

export default Modal
