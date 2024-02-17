import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import { spread } from "axios";

function Modal({ badge }) {
  const [show, setShow] = useState(false);
  const badgeImage = badge?.data?.[0]?.imageUrl || '';

  return (
    <>
      {!show && (
        <div className="modal-container">
          <div className="modal">
            <div>
              <button onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div>
              <div className="badge-subcont">
                <div  className="badge-image-container">
                {badgeImage ? <img src={badgeImage} alt="Badge" />:<span>laoding...</span>}  
                </div>
              </div>
            </div>
            <div>
              <h3>Badge Unlocked!🎇</h3>
              <p>🎉Level Up! Earned a shiny new badge🥇</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
