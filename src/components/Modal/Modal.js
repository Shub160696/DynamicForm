import React from 'react';
import './Modal.css';

export default function Modal({ children, setClose, show }) {
  return (
    <>
      {show && (
        <div className="modal-continer">
          <div className="main-modal-container">
            <div
              style={{
                position: 'absolute',
                marginLeft: '350px',
              }}
            >
              <button
                className="btn close-btn"
                type="button"
                onClick={setClose}
              >
                X
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
