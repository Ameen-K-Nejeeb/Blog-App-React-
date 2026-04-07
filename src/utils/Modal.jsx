import React from 'react'

const Modal = ({children}) => {
  return (
    <>
    <div className='bg-white/50 fixed insert-0 z-10'/>
      <h1>{children}</h1>
    </>
  )
}

export default Modal
