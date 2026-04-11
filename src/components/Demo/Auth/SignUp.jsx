import React, { useState } from 'react'
import Input from '../../../utils/Input';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase/firebase'; 
import { doc, setDoc, getDoc } from 'firebase/firestore'; 

const SignUp = ({ setSignReq, setModal }) => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  })
  const [loading, setLoading] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form[('username', 'email', 'password', 'rePassword')] === "") {
      toast.error('All fields are required')
    } else if (form.password !== form.rePassword) {
      toast.error('Password do not match!')
      return;
    } else {
      setLoading(true)
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password)
      const ref = doc(db, 'users', user.uid);
      const userDoc = await getDoc(ref)

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: user.uid,
          username: form.username,
          email: form.email,
          userImg: "",
          bio: "",
        })
        navigate('/')
        toast.success('User have been Signed in ')
        setModal(false)
      }
      setLoading(false)

    }


    console.log(form)
  }

  return (
    <div className="w-full max-w-[40rem] mx-auto mt-[5rem] text-center px-4">

      <h2 className="text-3xl font-serif text-zinc-800">Sign Up with email</h2>

      {/* 2. Fixed breakpoints and spacing */}
      <br /><br />
      <p className='w-full m:max-w-[25rem] mx-auto py-[2rem] text-gray-600 leading-relaxed '>
        Enter the email address associated with your account, and we’ll send a
        magic link to your inbox.
      </p>
      <br /><br />

      {/* 3. Form Layout Alignment */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-center' action="">
        <div className="w-full sm:w-[20rem] flex flex-col gap-4">
          <Input form={form} setForm={setForm} type='text' title='username' />
          <Input form={form} setForm={setForm} type='email' title='email' />
          <Input form={form} setForm={setForm} type='password' title='password' />
          <Input form={form} setForm={setForm} type='password' title='rePassword' />
        </div>

        {/* 4. Button Styling */}
        <button className={`px-6 py-2 text-lg w-25 fz- font-medium rounded-full bg-green-700
          hover:bg-green-800 text-white  mx-auto transition-all active:scale-95 mt-4 
          ${loading ? "opacity-50 pointer-events-none" : ""}`}>
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

export default SignUp
