import React from 'react'

const Modal = ({children, modal, setModal, hidden}) => {
  return (
    <>
    <div 
      onClick={() => setModal(false)}
    className={`bg-white/50 fixed insert-0 z-10 
     transition-all duration-500 ${hidden}`}/>
      <div className="relative z-50">{children}</div>
    </>
  )
}

export default Modal
