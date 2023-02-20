import React from "react";
import ReactDOM from "react-dom";
import "./modalSuccess.scss";
import Lottie from "lottie-react";
import successAnimate from "../../assets/success-animate.json";

const ModalSuccessComponent = ({ isShowing }) =>
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
                <Lottie animationData={successAnimate} />
              </div>
              <div className="modal-body">
                <h3>Welcome!</h3>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default ModalSuccessComponent;
