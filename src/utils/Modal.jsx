import React from 'react'

const Modal = ({ children, modal, setModal }) => {
  return (
    <>
      {/* Background Overlay - Changed to Gray with 50% opacity */}
      <div
        onClick={() => setModal(false)}
        className={`fixed inset-0 z-10 bg-gray-200/50 transition-all duration-500 ${
          modal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ${
          modal ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* 'pointer-events-auto' allows interaction with the actual modal content */}
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal