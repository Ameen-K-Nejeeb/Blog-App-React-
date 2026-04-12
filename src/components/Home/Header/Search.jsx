import React from 'react'
import { IoSearch } from "react-icons/io5";
import Modal from '../../../utils/Modal'

const Search = ({ modal, setModal }) => {
  return (
    <>
      {/* 1. This is the icon you see on the Navbar */}
      <div 
        onClick={() => setModal(true)}
        className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-full cursor-pointer text-gray-400 hover:text-gray-600"
      >
        <span className='text-2xl'><IoSearch /></span>
        <span className="text-sm hidden ">Search</span>
      </div>

      {/* 2. This is the Modal that pops up when clicked */}
      <Modal modal={modal} setModal={setModal}>
        <div className="absolute right-4 left-4 top-[4rem] sm:right-auto sm:left-[10%] sm:w-[30rem]">
           <div className="flex h-10 items-center gap-3 bg-white p-3 rounded-full shadow-lg border">
              <span className='text-2xl text-gray-500'><IoSearch /></span>
              <input 
                type="text" 
                placeholder="Search Medium" 
                className="w-full outline-none bg-transparent"
                autoFocus 
              />
           </div>
        </div>
      </Modal>
    </>
  )
}

export {Search}
