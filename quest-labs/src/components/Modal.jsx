import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const modalContainerStyle = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(252, 252, 252, 0.5)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Modal() {
      const[show,setShow] = useState(false)
  return (
    <>
      {!show  && <div className="modal-container" style={modalContainerStyle}>
        <div
          className="modal"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            width: "30%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "10px",
          }}
        > 
          <div style={{position:'absolute', top:"6px", left:"26.6em",background:'transparent'}}>
          <button style={{background:'transparent',border:'none'}} onClick={()=>setShow(!show)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          </div>
           <div>
              <img src="" alt="" />
           </div>
            <div>
                <h3>Badge Unlocked!🎇</h3>
<p>🎉Level Up!Earned a shiny new badge🥇</p>
            </div>
        
        </div>
      </div> }
      
    </>
  );
}

export default Modal;
