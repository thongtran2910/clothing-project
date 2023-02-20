import React from "react";
import ReactDOM from "react-dom";
import ButtonComponent from "../button/ButtonComponent";
import "./modalConfirm.scss";

const ModalConfirmComponent = ({ isShowing, hide, onDeleteHandler }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3>Delete item?</h3>
              <div className="modal-footer">
                <ButtonComponent onClick={onDeleteHandler} buttonType="delete">
                  Sure
                </ButtonComponent>
                <ButtonComponent onClick={hide}>Wait...</ButtonComponent>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default ModalConfirmComponent;
