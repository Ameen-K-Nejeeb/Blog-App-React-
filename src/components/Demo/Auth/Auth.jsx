import React, { useState } from 'react'
import Modal from '../../../utils/Modal'
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = ({ modal, setModal }) => {

    const [createUser, setCreateUser] = useState(false)
    const [signReq, setSignReq] = useState('')
    // const [modal, setModal] = useState(false)

    const hidden = modal ? "visible opacity-100" : 'invisible opacity-0'

    return (
        <Modal modal={modal} setModal={setModal} hidden={hidden}>
            <section className={`z-50 fixed top-4 bottom-20 left-0 md:left-[10rem]
        overflow-auto right-0 md:right-[10rem] bg-white shadows
         transition-all duration-500 ${hidden}`}
            >
                <button
                    onClick={() => setModal(false)}
                    className=' absolute top-8 right-8 text-2xl hover:opacity-50 z-[60]'>
                    <FaTimes />
                </button>

                <div className='pt-[5rem]'>
                    <div className="flex flex-col justify-center items-center gap-[3rem]">
                        {signReq === '' ? (
                            <>
                                <h2 className='text-2xl mt-10 '>{createUser ? 'Join Medium' : 'Welcome Back'}</h2>
                                <div className='flex flex-col gap-2 w-fit mx-auto'>

                                    <Button icon={< FcGoogle className='text-3xl ' />}
                                        text={`${createUser ? 'Sign Up With Google' : "Sign In With Google"}`} />

                                    <Button icon={<MdFacebook className="text-3xl  text-blue-600" />}
                                        text={`${createUser ? 'Sign Up With FaceBook' : "Sign In With FaceBook"}`} />

                                    <Button
                                        click={() => setSignReq(createUser ? 'sign-up' : 'sign-in')}
                                        icon={<AiOutlineMail className="text-3xl" />}
                                        text={`${createUser ? 'Sign Up With E-Mail' : "Sign In With E-Mail"}`} />
                                </div>
                                <p className='flex top-[1rem] justify-center gap-2'>
                                    {createUser ? 'Already have an account' : 'No Account'}
                                    <button onClick={() => setCreateUser(!createUser)} className='text-green-600  hover:text-green-700 font-bold ml-1'>{createUser ? 'Sign In' : 'Create One'}</button>
                                </p>
                            </>
                        ) : signReq === 'sign-in' ? (
                            <SignIn setSignReq={setSignReq} />
                        ) : signReq === 'sign-up' ? (
                            <SignUp setSignReq={setSignReq} />
                        ) : null}
                        <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem]'>Click "Sign In" to agree to Medium's Terms of Service and acknowledge that Medium's
                            Privacy Policy applies to you.</p>
                    </div>
                </div>

            </section>
        </Modal>
    )

}

export default Auth

const Button = ({ icon, text, click }) => {
    return (

        <button
            onClick={click}
            className='flex items-center h-[3rem] gap-10 sm:w-[20rem] border border-black
        px-3 py-2 rounded-full'>
            <hr />{icon} {text}
        </button>
    )
}

