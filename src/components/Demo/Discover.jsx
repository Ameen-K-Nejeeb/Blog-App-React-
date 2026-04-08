import React from 'react'
import { discover, discoverActions } from '../../data'

const Discover = () => {
    return (
        <div className='sticky top-[6rem] max-w-[400px]'>
            {/* Top Section: Topic Chips */}
            <div className="border-b border-gray-200 pb-8">
                <h2 className='font-bold text-sm mb-5 text-black1 uppercase tracking-widest'>
                    Discover more of what matters to you
                </h2>
                
                <div className="flex items-center gap-3 flex-wrap ">
                    {discover.map((item, i) => (
                        <button 
                            key={i} 
                            /* Increased py-2.5 (vertical) and px-6 (horizontal) 
                               Added min-w-[80px] to ensure even short words look like solid buttons
                            */
                            className='bg-gray-100 hover:bg-gray-200 text-black1 py-2.5 px-6 text-[0.95rem] font-medium rounded-full transition-all duration-200 border border-gray-100 hover:border-gray-300 min-w-[90px] text-center'
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <button className='text-green-700 text-[1rem] font-semibold mt-6 hover:text-black transition-colors'>
                    See more topics
                </button>
            </div>

            {/* Bottom Section: Footer Links */}
            <div className="flex items-center flex-wrap gap-x-6 gap-y-3 pt-8">
                {discoverActions.map((item, i) => (
                    <button 
                        key={i} 
                        /* Increased font size slightly and added better horizontal gap */
                        className='text-[0.9rem] text-gray-500 hover:text-black1 font-normal transition-colors'
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Discover