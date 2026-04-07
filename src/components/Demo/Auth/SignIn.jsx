import React from 'react'
import Input from '../../../utils/Input';

const SignIn = ({setSignReq}) => {
  return (
    <div className="w-full max-w-[40rem] mx-auto mt-[5rem] text-center px-4">
      {/* 1. Typography improvement */}
      <h2 className="text-3xl font-serif text-zinc-800">Sign in with email</h2>
      
      {/* 2. Fixed breakpoints and spacing */}
      <br /><br />
      <p className='w-full m:max-w-[25rem] mx-auto py-[2rem] text-gray-600 leading-relaxed '>
        Enter the email address associated with your account, and we’ll send a
        magic link to your inbox.
      </p>
      <br /><br />

      {/* 3. Form Layout Alignment */}
      <form className='flex flex-col gap-6 items-center' action="">
        <div className="w-full sm:w-[20rem] flex flex-col gap-4">
          <Input type='email' title='Email' />
          <Input type='password' title='Password'/>
        </div>
        
        {/* 4. Button Styling */}
        <button className='px-6 py-2 text-lg w-25 fz- font-medium rounded-full bg-green-700
          hover:bg-green-800 text-white  mx-auto transition-all active:scale-95 mt-4'>
          Sign In
        </button>
      </form>

      {/* 5. Back Button (Standard Medium UX) */}
      <button 
        onClick={() => setSignReq('')} // Temporary way to go back
        className="mt-8 text-green-700 text-m hover:text-black
         transition-colors gap-20 mx-auto"
      >
        <br /><br />
        <span>&lt;</span> All sign in options
      </button>
    </div>
  ); 
};

export default SignIn
