import { Link } from "react-router-dom"; // Don't forget this import!
import { useState, useEffect } from 'react'
import Auth from "./Auth/Auth.jsx";


const DemoHeader = (props) => {

    const [isActive, setIsActive] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        }
        window.addEventListener('scroll', scrollMe)
    }, [])

    const nav = [
        { title: 'Our story', path: '/story' },
        { title: 'Membership', path: '/membership' },
        { title: 'Write', path: '/write' }
    ];

    return (
        <header
            className={`border-b border-black sticky top-0 z-50 transition-all duration-500  
                ${isActive ? 'bg-white' : 'bg-banner'
                }`}
        >


            {/* 2. Changed 'space-between' to 'justify-between' and added 'container mx-auto' */}
            <div className="container mx-auto h-[70px] flex items-center justify-between px-4">

                <Link to="/">
                    <img
                        className="h-[2.5rem] object-contain"
                        src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
                        alt="logo"
                    />
                </Link>

                <div className='flex items-center gap-5'>
                    {/* 3. Navigation Links */}
                    <div className='hidden text-sm sm:flex items-center gap-5'>
                        {nav.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path}
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* 4. Action Buttons */}
                    <div className="flex items-center gap-5">
                        <button
                        onClick={() => setModal(true)}
                        className='hidden sm:block text-sm hover:text-gray-600 transition-colors'>
                            Sign In
                            
                        </button>
                        <Auth modal={modal} setModal={setModal} />
                        <button 
                        onClick={() => setModal(true)}
                        className={`bg-black text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-all w-[6.5rem] h-[2.3rem]
                        ${isActive ? 'bg-green-700' : 'bg-black'}
                        `}>
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default DemoHeader;