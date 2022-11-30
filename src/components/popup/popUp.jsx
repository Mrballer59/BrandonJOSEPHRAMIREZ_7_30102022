import React from "react";
import "./popUp.css";

function PopUp({ setIsOpen }) {
  return (
    <>
      <div className="bigDiv" onClick={() => setIsOpen(false)} />
      <div className="mainDiv">
        <div className="modal">
          <div className="modalContent">Employee Created!</div>
          <div className="M-Actions">
            <div className="actionsContainer">
              <button className="Btn-succ" onClick={() => setIsOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
